var color  = 'blue';

//局部作用域中定义的变量可用于在局部上下文中替换全局变量。
function changeColor(){
    let anotherColor = 'red';

    function swapColor(){
        let tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;

         //这里可以访问color,tempColor,anotherColor
    }

    //这里能访问color,anotherColor
}

//这里能访问color

console.log('-----------------')

//作用域链增强   注意看书P90页


//变量声明
//注意在初始化变量之前一定要记得先声明变量

//使用var的函数作用域声明。在使用var声明变量时，变量会自动添加到最接近的上下文。如果变量在未经声明就被初始化了，那么他就会自动被添加到全局上下文。
var name = 'Jack';
//等价于：
name = 'Rock';
var name;

//下面是两个等价的函数
function fn1(){
    var name = 'Jack';
}
//等价于：
function fn2(){
    var name;
    name  = 'Jake';
}


//通过在声明致歉打印变量，可以验证变量会被提升。声明的提升意味着会输出undefind而不是Reference Error:
console.log(name5);   //undefined
var name5 = 'Jack';

function test() {
    console.log(name6);
    var name6 = 'Jack';      //undefind

}

console.log('---------');

//使用let的块级作用域声明
//即它的作用域是块级的，块级作用域由最近的一对包含花括号{}界定。  且同一个块级中使用let不能重复定义同一个变量。
//let的行为非常适合在循环中声明迭代变量。使用var声明的迭代变量会泄露到循环外部

for(var a=0;a<10;a++){}
console.log(a);  //a=9

for(let b=0;b<10;b++){}
// console.log(b)    //ReferenceError ：b没有被定义

console.log('-----------');

//使用const的常量声明
//使用const声明的变量必须同时初始化为某个值。一经声明，在其生命周期的任何时候都不能再重新赋值。

// const a;  //SyntaxErr： 常量声明时没有初始化
const b = 2;
console.log(b);   //2
// b = 4;  //TypeError： 给常量赋值
//const除了要遵循上面的规则，其他方面和let声明是一样的。

//赋值为对象得const变量不能再被重新赋值为其他引用值，但对象得键不受限制。
const o1 = {};
// o1 = {};   //TypeError：给常量赋值

const o2 = {};
o2.name = 'BBBBB';
console.log(o2.name);   //BBBBB

//如果想让整个对象都不能修改得话，需要使用Object.freeze().
const o3 = Object.freeze({});
o3.name = 'KKKKK';
console.log(o3.name);   //undefined