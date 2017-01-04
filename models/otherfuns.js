//  只支持一个函数  
// function  controller(req,res){      
//     //res.write("发送");      
//     call('hello',req,res);      
//     res.end("");      
// }      
// function  call(res){      
//     console.log('call');      
// }      
// module.exports  =  controller;   
    
         
//支持多个函数      
module.exports={      
    fun2:function(res){      
        res.write('FUN二');
    },      
    fun3:function(res){      
        res.write('FUN三');
    }      
}      