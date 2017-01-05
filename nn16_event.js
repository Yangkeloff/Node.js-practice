var http = require('http');
var events = require("events");
var UserBean = require('./models/UserBean');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;  charset=utf-8' });
    if (request.url !== "/favicon.ico") {
        user = new UserBean();
        user.eventEmit.once('zhuceSuc', function(uname, pwd) {
            response.write('注册成功');
            console.log('传来uname:' + uname);
            console.log('传来pwd:' + pwd);
            user.login(request, response);
            response.end('');
        }); //注册监听   
        user.zhuce(request, response);
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');