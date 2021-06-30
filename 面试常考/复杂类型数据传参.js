function Person(name){
    this.name = name;
}
function f1(x){
    console.log(x.name);   //刘德华
    x.name = '张学友';
    console.log(x.name)    //张学友
}
var p = new Person('刘德华');
console.log(p.name);       //刘德华
f1(p);
console.log(p.name)        //张学友