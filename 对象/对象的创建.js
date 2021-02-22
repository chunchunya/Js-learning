//对象的创建有三种形式
//1.利用对象字面量创建对象{}
var obj = {};  //创建了一个空的对象
var obj1 ={
    username: '春春',
    age: 20,
    sex: '女',
    sayHi: function() {
        console.log('hi~')
    }
}
//(1)里面的属性或者方法我们采取键值对的形式  键 属性名： 值 属性值
//（2）多个属性或者方法中间用逗号隔开
//（3）方法冒号后面跟的是一个匿名函数

//2.使用对象
//（1）调用对象的属性 我们采取 对象名.属性名
console.log(obj1.username)
//(2)调用属性还有一种方法 对象名['属性名']
console.log(obj1['age'])
//(3)调用对象的方法  sayHi  对象.方法名()  千万别忘记小括号
obj1.sayHi();


//2.利用new Object创建对象
var obj2 = new Object(); //创建了一个空的对象
obj2.name = '春春';
obj2.age = 18;
obj2.sex = '男';
obj2.sayHi = function(){
    console.log('hi~')
}
//(1)利用 等号 = 赋值的方法添加对象的属性和方法
//（2）每个属性和方法之间用分号结束


//3.利用构造函数创建对象
//我们为什么需要使用构造函数
//因为前面两种创建对象的方式一次只能创建一个对象，里面很多的属性和方法是大量相同的 要想一次性多创建几个 我们只能复制
//因此我们可以利用函数的方法 重复这些相同的代码 我们就把这个函数称为 构造函数
//又因为这个函数不一样，里面封装的不是普通代码，而是 对象
//构造函数 就是把我们对象里面一些相同的属性和方法抽象出来封装到函数里面
var ldh = {
    username:'刘德华',
    age: 55,
    sing: function (){
        console.log('练习');
    }
}
var zxy = {
    username:'张学友',
    age: 50,
    sing: function (){
        console.log('烦恼歌');
    }
}
//需求：创建四大天王的对象
    //构造函数语法规范
    // function 构造函数名(){
    //   this.属性 = 值;
    //   this.方法 = function(){}
    // }
    //new 构造函数名();

//构造函数和对象
//1.构造函数  明星 泛指某一大类  类似于java语言中的类（class）
function Star(username,age,sex){
    this.name = username;   //属性名可以随便起，而值是指向形参的，必须跟形参一样
    this.age = age;
    this.sex = sex

}
//2.对象 特指 是一个具体事物 刘德华
var ldh = new Star('刘德华',17,'女');    //调用函数返回的是一个对象
//new关键字执行过程
//1.new 构造函数可以在内存中创建了一个空的对象
//2.this就会指向刚才创建的空对象
//3.执行构造函数里面的代码，给这个空对象添加属性和方法
//4.返回这个对象
var zxy = new Star('张学友',19,'女')

console.log(typeof ldh)
console.log(ldh.name)
//3.利用构造函数创建对象的过程也称为对象的实例化


console.log(zxy.name)
//1.构造函数名字首字母要大写
//2.构造函数不需要return 就可以返回结果
//3.调用函数必须使用new

//遍历对象
var obj3 = {
    name: '丫丫',
    age:18,
    sex:'女'
}
//for in遍历对象
//基本格式   for(变量 in 对象){}
for(var i in obj3){
    console.log(i);  //i 变量 输出  得到的是属性名
    console.log(obj3[i])
}
//使用for in 里面的变量 一般写k 或者写key