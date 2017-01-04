var fs= require('fs');
module.exports={
    //读文件
    readfile:function(path,recall){          //异步执行
        fs.readFile(path,function(err,data){
            if(err){
              console.log(err);
              recall('文件不存在');
            }else{
            //   console.log(data.toString());
            recall(data);
            }
             console.log('异步执行完成');
        });
    },
    readfileSync:function(path){      //同步读取
        var data = fs.readFileSync(path,'utf-8');
        //console.log(data);
        console.log("同步方法执行完毕");
        return data;                
    },
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,file){
            if(err){
                console.log(err);
                return;
            }else{
                console.log("输出文件");
                res.write(file,'binary');
                res.end();
            }
        });
    },
    //写文件
    writefile:function(path,data,recall){    //异步方式
        fs.writeFile(path,data,function(err){
            if(err) {
                throw err;
            }
            console.log('It\'s saved!');  //文件被保存
            recall('写文件成功！');
        });
    },
    writeFileSync:function(path,data){  //同步方式
        fs.writeFileSync(path,data);
        console.log("同步写文件完成");
    }
}