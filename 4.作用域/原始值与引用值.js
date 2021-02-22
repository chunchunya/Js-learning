//动态属性
//原始值与引用值的区别
//原始值就是一些简单的数据。而引用值就是由多个值构成的对象。
//变量中引用值的用法
let person = new Object();
person.name = "ZYC";
console.log(person.name);   //打印出来“ZYC”


//变量中原始值的用法
let people = "ZYC";
people.age = 11;
console.log(people.age);  //打印出来undefined

//只有引用值可以动态添加后面可以使用的属性。如上述第一种情况！！

console.log("----------------");

//原始值类型的初始化可以只使用原始字面量形式。如果使用的是new关键字，则Javascript会创建一个Object类型的实例，但其行为类似原始值。如下面所示两种初始化方式的差异：
let name1 = 'AAA';
let name2 = new String('AAAA');
name1.age = 10;
name2.age = 12;
console.log(name1.age);
console.log(name2.age);
console.log(typeof name1);
console.log(typeof name2);

console.log("----------------");

//复制值
//原始值的复制：通过变量把一个原始值复制给另一个变量时，原始值会被复制给新变量的位置。
let num1 = 5;
let num2 = num1;
console.log(num1);
console.log(num2);   //打印出来num1= 5   num2 = 5;

// 引用值的复制，从一个变量赋给另一个变量时，存储在变量中的值也会被复制到新变量所在的位置。
let obj1 = new Object();
let obj2 = obj1;
obj1.name = 'YYY';
console.log(obj2.name);    //上述obj1和obj2都指向同一个对象，复制的值实际上是一个指针，它指向存储在堆内存中的对象。

console.log('------------------');

//传递参数
//ECMAScript中所有函数的参数都是按值传递的。（即传参只有按值传递）
function addTen(num){
    num +=10;
    return num;
}
let count = 10;
let result  = addTen(count);
console.log(count);
console.log(result);  //count值不变，还是10，result是20；  参数num和变量count互不干扰。

//如果变量中传递的是对象，
function setName(obj){
    obj.name = 'Nochohis';
    return obj.name;
}
let person1 = new Object();
let result1 = setName(person1);
console.log(person1.name);   //输出'Nochois',在这里，obj和person1都指向同一个对象。  但是对象还是相当于按值传递的
console.log(result1);        //输出undefined     why???


//证明对象是按值传递的而不是按引用传递的。
function setName1(obj){
    obj.name = 'ZZZZZ';
    obj = new Object();
    obj.name = 'YYYYY';
}
let person2 = new Object();
setName1(person2);
console.log(person2.name);    //打印的是ZZZZZ


//确定类型
//typeof是判断一个变量是否为字符串、数值、布尔值或者undefined的最好的方式。(对原始值很有用，对引用值用处不大)
let s = 'ddddd';
let b = true;
let i = 22;
let u;
let n = null;
let o = new Object();
console.log(typeof s);   //string
console.log(typeof b);   //boolean
console.log(typeof i);   //number
console.log(typeof u);   //undefined
console.log(typeof n);   //object
console.log(typeof o);   //object

//instanceof用来检测是否是引用值类型。检测任何引用值和Object构造函数都会返回true。检测原始值，则返回false。
//下面这个只是一个例子，实际上跑的时候是报错的，只是可以在具体情况下这么用而已。

// console.log(colors instanceof Array);