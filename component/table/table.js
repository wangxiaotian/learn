// 这样做的好处是只有在函数内部才能访问代码变量，防止误修改
(function(){
    var Table = function(){

    }
    Table.prototype.configuration = {
    	container : 'MyTable',
    	// 先不管数据如何通过路径来设置
    	data : '',
    	thead : [{
    		"th" : "姓名"
    	},{
    		"th" : "年龄"
    	},{
    		"th" : "工作"
    	}，{
    		"th" : "地点"
    	}]
    }
    Table.prototype.init = function(options){
    	var self = this;
    	$.extend(true,this,self.configuration,options);

    }
    Table.prototype.initDom = function(){
    	var strDom = "<table><thead></thead><tbody></tbody></table>"
    }
    Table.prototype.createDom = function(){
    	var self = this;
    	var str_thead = self.configuration.thead;
    	for(var i = 0; i < str_thead.length; i++) {
    		var ThDom = "";
    		ThDom += "<th>" + str_thead[i].th + "</th>";
    	}
    	var str_tbody = self.configuration.data.table;
    	// 这里是有两层循环，td要循环，tr也要循环，这条路或许走不通
    	for(var j = 0; j < str_tbody.length; j++) {
    		var tdDom = "";
    		tdDom += "<tr><td>"
    	}
        strDom = "<table><thead><tr>" + ThDom + "</tr></thead><tbody></tbody></table>"
    }
})()