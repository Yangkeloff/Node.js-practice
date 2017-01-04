function  User(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age;
    this.enter=function(){
        console.log(name+"进入图书馆");
    }
}
module.exports=User;