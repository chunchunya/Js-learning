let a =[]
// for (var i = 0;i < 5; ++i){
//     a[i] =  function (i){
//         return ()=>{
//             console.log(i)
//         }
//     }(i)      //不明白这里为什么加一个（i）
// }
//
// a[3]();    //  3
//
// for (let i = 0; i < 5; ++i){
//     a[i] = function () {
//         console.log(i)
//     }
// }
// a[3]();   //  3



for (var i = 0; i < 5; ++i){
    a[i] = function () {
        console.log(i)
    }
}
a[2]();



for (var i = 0; i < 5; ++i){
    a[i] = function (i) {
        console.log(i)
    }
}
a[2]();