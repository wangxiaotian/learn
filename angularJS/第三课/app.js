自定义services，services有多种表现形式，如：value（）；constant（）；factory（）；services（）；


angular.module('app',[])
.value('realname','王五')
/*value的值是可以改变的*/
.value('realname','赵六')
/*constant的值不可以改变*/
.constant('http','www.baidu.com')
.constant('http','www.souhu.com')
.factory('Data',function(){
	return {
		Msg : '你好啊',
		setMsg : function(){
			this.Msg = '我很好';
		}
	}
})
.service('User',function(){
	this.firstname = "上官";
	this.lastname = "飞燕";
	this.getName = function(){
		return this.firstname + this.lastname;
	}
})
.controller('MyCtrl',function($scope,realname,http,Data,User){
	$scope.msg = "hello word";
	$scope.realname = realname;
	$scope.http = http;
	$scope.data = Data;
	$scope.data.setMsg();
	$scope.uname = User.getName();

})