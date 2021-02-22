
let i = 10;

//if语句
if(i<=10){
    console.log("you are my sunshine!");
}else{
    console.log('you are a pig!!!');
}

console.log('--------------------');

//do-while 语句
do{
    i+=2;
    console.log(i);
}while(i<20)

//while语句
while(i<30){
    i+=1;
    console.log(i);
}

console.log('--------------------');

//for 循环
//无限循环式
// for(;;){
//     console.log("nishishagua!!!")
// }

//for in语句 是一种严格的迭代语句，用于枚举对象中的非符号键属性！
// for(const propName in window){
//     document.write(propName);
// }

//for of语句也是一种严格的迭代语句，用于遍历可迭代对象的元素。
// for(const el of [1,2,3,4]){
//     document.write(el);
// }

//break和continue语句
//break和continue两个虽然都是中断函数，而且都是退出循环的作用，但是break是直接退出循环，不做迭代，而continue是退出本轮循环，还要接着进行下一轮迭代，还要进行下一轮循环。

//break与标签函数的结合（标签函数主要是用于嵌套循环）
let num = 0;
outmost:
    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            if(i==5&&j==5){
                break outmost;
            }
            num++;
        }
    }
console.log(num)    //这里的num等于55


//continue与标签函数的结合（主要标签函数的格式！！）
let number = 0;
outmost1:
    for(i=0;i<10;i++){
        for(j=0;j<10;j++){
            if(i==5&&j==5){
                continue outmost1;
            }
            number++;
        }
    }
console.log(number)    //这里的number等于95

//注意这里好好体会一下break和continue的用法，以及他们的作用！！！！

console.log('--------------------');

//with语句的用途是将代码作用域设置为特定的对象,知道作用即可，现实中一般不推荐使用

//ECMAScript为switch函数赋予了一些独特的特性，首先switch语句可以用于所有的数据类型，除了数值，还可以是字符串或者对象。其次，条件的值不需要是常量，也可以是变量或者表达式。
switch('hello world'){
    case'hello'+' '+'world':
        console.log('Greeting is found!');
        break;
    case'goodbye':
        console.log('Closing was found!');
        break;
    default:
        console.log('error!')
}