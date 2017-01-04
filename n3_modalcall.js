var http = require('http');    
//var User = require('./models/User');
var Teacher = require('./models/Teacher');
http.createServer(function(req,res){        
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});        
        if(req.url!=="/favicon.ico"){//清除第2此访问
          teacher=new Teacher(1,'李四',30);
          teacher.enter();
          teacher.teach(res);
          res.end('');    
    }
}).listen(8000);        
console.log('Server running at http://127.0.0.1:8000/');