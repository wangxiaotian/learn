var http = require('http'),
    fs = require('fs'),
    urlutil = require('url'),   
    path = require('path'),
    mime = require('./mime');
     
     
http.createServer(function(request, response){
    //get path from request's url
    var urlpath = urlutil.parse(request.url).pathname;
    //map the path to server path
    var absPath = __dirname + "/webroot" + urlpath;
     
    //test whether the file is exists first
    path.exists(absPath, function(exists) {
        if(exists) {
            //二进制方式读取文件
            fs.readFile(absPath,'binary',function(err, data) {
            //our work is here
            if(err) throw err;
             
            //获取合适的 MIME 类型并写入 response 头信息
            var ext = path.extname(urlpath);
            ext = ext ? ext.slice(1) : 'unknown';
            console.log(ext);
            var contentType = mime.types[ext] || "text/plain";
            console.log(contentType);
            response.writeHead(200,{'Content-Type':contentType});
            //console.log(data);
            //使用二进制模式写
            response.write(data,'binary');
            response.end();
    });
        } else {
            //show 404
            response.end('404 File not found.');
        }
    });
}).listen(3000);
console.log('Server start in port 3000.');