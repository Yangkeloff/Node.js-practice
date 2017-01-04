var optfile=require('./optfile');
var url=require('url');
var  querystring  =  require('querystring');  //post需导入  

function getRecall(req,res){
    res.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'}); 
    function recall(data){
            res.write(data);
            res.end('');//不写则没有http协议尾
    }
    return recall;
}
module.exports={
    login:function(req,res){
         //--------get方式接收参数----------------            
        // var rdata=url.parse(req.url,true).query;      
        // console.log(rdata);    
        // if(rdata['email']!=undefined){  
        //     console.log(rdata['email']);
        //     console.log(rdata['pwd']);      
        // }

        //-------post方式接收参数---------------- 
        var  post  =  '';          //定义了一个post变量，用于暂存请求体的信息
        req.on('data',  function(chunk){
        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中      
            post += chunk;      
        });      
        //-------注意异步-------------      
        req.on('end',  function(){
        // 在end事件触发后，
        // 通过querystring.parse将post解析为真正的POST请求格式，
        // 然后向客户端返回。      
            post  =  querystring.parse(post);      
            console.log('email:'+post['email']+'\n');        
            console.log('pwd:'+post['pwd']+'\n');
            recall=getRecall(req,res);
            optfile.readfile('./views/login.html',recall);
        });
    },
    signup:function(req,res){
        recall=getRecall(req,res); 
        optfile.readfile('./views/signup.html',recall);
    },
    writefile:function(req,res){
        recall=getRecall(req,res); 
        optfile.writefile('./views/one.txt','我的写入文件',recall);
    },
    showimg:function(req,res){
        res.writeHead(200, {'Content-Type':'image/jpeg'});  
        optfile.readImg('./images/logo.png',res);
    }
}