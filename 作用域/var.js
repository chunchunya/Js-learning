// //案例1 结果是123  就近原则
// function f1(){           //一级链
//     var num = 123;
//     function f2(){       //二级链
//         //如果这里加一个 var num = 0的话，结果就是输出0
//         console.log(num);      //站在目标出发，一层一层的往外查找
//     }
//     f2();
// }
// var num = 456;
// f1();

//————————————————————————————————

//案例2   4 22
var a = 1;
function fn1(){
    var a = 2;
    var b = '22';
    fn2();
    function fn2(){
        var a = 3;
        fn3();
        function fn3(){
            var a = 4;
            console.log(a);
            console.log(b);
        }
    }
}
fn1();