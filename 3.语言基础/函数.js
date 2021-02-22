//ECMAScript中的函数使用function关键字声明，后跟一组参数，然后是函数体。以下是举例。
function sayHi(name,msg){
    console.log('Hello'+' '+name+','+msg);
}
sayHi('Zhangyuchun','How are you?')

console.log('--------------------');

//ECMAScript中的函数不需要指定是否返回值。任何函数在任何时间都可以使用return语句来返回函数的值。
function sum(num1,num2){
    return num1+num2;
    console.log('KKKK')   //不会被执行，因为只要碰到return语句，函数就会立即停止执行并退出，因此return语句后面的代码不会被执行。
}
const result = sum(1,2);
console.log(result);