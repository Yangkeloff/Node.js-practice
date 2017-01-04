var http=require('http');
var url=require('url');
var router=require('./models/router');
// var optfile=require('./models/optfile');
http.createServer(function(req, res) {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(req.url!=="/favicon.ico"){ //清除第2此访问
        // function recall(data){
        //     res.write(data);
        //     res.end('oK');//不写则没有http协议尾
        // }
        // optfile.readfile('./views/login.html',recall);
        // console.log('主程序执行完毕');
        var pathname=url.parse(req.url).pathname;
        console.log(pathname);
        pathname=pathname.replace(/\//,'');//正则去URL中的'/'
        router[pathname](req,res);
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');