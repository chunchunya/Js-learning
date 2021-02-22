//逻辑与操作符&&
let found = false;
let result = (found && someUndeclaredVariable);
console.log(result)

//逻辑或操作符||
let found1 = true;
let result1 = (found1 || someUndeclaredVariable1);
console.log(result1)


//js中的指数操作符
console.log(1**2)

let square = 3;
let square1 = 4
square **= 2; //其实就相当于square= square**2
square1 **=2;
console.log(square);
console.log(square1)

/*ECMAScript中最常犯的一个关于加法的错误,注意这里的规则，当加法中有一个是字符串时，当另一个是数字，也当成字符串处理；
若有任一操作数是对象、数值或者布尔值，则调用toString()方法以获取字符串，再进行上一规则*/
let num1 = 5;
let num2 = 6;
let message = 'The sum of the two number is:'+num1+num2;
console.log(message)
//最后打印的结果是The sum of the two number is:56，并不是11，若想变成数值计算，则需要改变一下运算顺序，先执行两个数值的加法
let message1 = 'The sum of the two number is:' +(num1+num2);
console.log(message1)
//此时得到的数值是正确的数值   The sum of the two number is:11

//减法操作符
//如果有任意操作数是字符串、布尔值、null或者undefined,则先利用Number()转换成数值，再执行剑法操作。

console.log(5 - true)  //结果是4，true强制转换了数值1，别的也如此


