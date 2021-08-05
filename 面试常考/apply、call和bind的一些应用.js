//应用1 类数组转化为真正的数组
let arrayLike = {
    0:"lala",
    1:"lele",
    2:"dudu",
    length:3        //length一定要加，否则就不是一个类数组
}

let arrayTrue = Array.prototype.slice.call(arrayLike)
console.log(arrayLike);
console.log(arrayTrue);

let arr1 = [1,2,3,4,5];
console.log(arr1.slice());  //[1,2,3,4,5]   //类似于数组的复制（浅拷贝，但是这里都是一维的数组，所以和深拷贝没什么区别）


//应用2  arguments是类数组，将其转化为真正的数组

function fn(){
    console.log(arguments);
    console.log(Array.prototype.slice.call(arguments));
}
fn(1,2,3,4,5);

//应用3 实现数组的拼接  用apply方法

let number1 = [1,2,3];
let number2 = [4,5,6];
console.log(number1.concat(number2))  //第一种方法，但是这种是不会改变number1和number2本身的一个数组内容
console.log(number1);
console.log(number2);

[].push.apply(number1,number2);
console.log(number1);    //输出[1，2，3，4，5，6]
Array.prototype.push.apply(number1,number2);  //第二种利用apply的方法
console.log(number1);   //输出 [1,2,3,4,5,6,4,5,6]

//应用4 判断数据类型

let m = [3,2,1]
function isArray(array){
    return Object.prototype.toString.call(array) === '[object Array]';
    return Object.prototype.toString.call(array) === '[object Object]';
    return Object.prototype.toString.call(array) === '[object String]';
    return Object.prototype.toString.call(array) === '[object Null]';
}

console.log(isArray(m));

