var http = require('http');  
var optfile = require('./models/optfile');  
http.createServer(function(req,  res)  {  
    //res.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});  
    res.writeHead(200, {'Content-Type':'image/jpeg'});  
    if(req.url!=="/favicon.ico"){  //清除第2此访问  
        console.log('访问');  
        //res.write('hello,world');//不能向客户端输出任何字节  
        optfile.readImg('./images/logo.png',res);
    }  
}).listen(8000);  
console.log('Server running at http://127.0.0.1:8000/');