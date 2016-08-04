/*entry.js文件*/
document.getElementById('app').innerHTML = "这是我第一个打包成功的程序";
/*添加js模块*/
require('./first.js');
/*添加css模块*/
/*真的生效了，就是不知道为什么要写成这样的样式，遵循的是什么规则*/
require('./style.css')