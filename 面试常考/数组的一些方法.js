let arr = [1,2,3,4,5,6,7];

//map方法
let newArr = arr.map((item,index)=>{return item+index})
// let newArr = arr.map(function(item,index){return item+index})
console.log(newArr);   //[1,3,5,7,9,11,13]

//filter方法
let newArr1 = arr.filter(function(item,index){
    return item>5&&index>5
})
console.log(newArr1);  //[7]

//some方法
let obj1 = [
    {color:'red', fruits:'apple'},
    {color:'yellow', fruits:'orange'}
    ]
let some = obj1.some(function(item,index){
    return item.color = 'red';
})
console.log(some);     //true
//every方法

let every = obj1.every(function(item,index){
    return item.color = 'red';
})
console.log(every);   //false


//reduce方法见reduce.js文件