var http= require('http');    
var url= require('url');
var router=require('./models/router');  
http.createServer(function(req,res){    
        if(req.url!=="/favicon.ico"){    //清除第2此访问      
        pathname=url.parse(req.url).pathname;
        pathname=pathname.replace(/\//,'');//替换掉前面的/
        router[pathname](req,res);
        }    
}).listen(8000);    
console.log('Server running at http://127.0.0.1:8000/');