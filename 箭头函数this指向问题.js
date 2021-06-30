
// function foo(){
//     setTimeout(()=>{
//         console.log('id:',this.id);   //这里的this指向的是foo函数的作用域 箭头函数中的this指向谁创建它就指向谁
//     },100);
// }
// var id =21;
// foo();     //输出 undefined
// // foo.call({ id:42});

// function foo(){
//     this.id = 10
//     setTimeout(()=>{
//         console.log('id:',this.id);
//     },100);
// }
// var id =21;
// foo()     //输出10
// // foo.call({ id:42});

// function foo(){
//     this.id = 10
//     setTimeout(function(){        //这里换成了普通函数   this指向全局
//         console.log('id:',this.id);
//     },100);
// }
// var id =21;
// foo()      //输出undefined
// // foo.call({ id:42});

//
// function foo(){
//     this.id = 10
//     setTimeout(function(){
//         console.log('id:',this.id);
//     },100);
// }
// var id =21;
// new foo()    //输出undefined
//
// // foo.call({ id:42});


function foo(){
    this.id = 10
    setTimeout(()=>{
        console.log('id:',this.id);
    },100);
}
var id =21;
new foo()