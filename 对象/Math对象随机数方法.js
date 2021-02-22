//想要得到两个数之间的随机整数 并且 包含这2个整数
//Math.floor(Math.random()*(max-min+1))+min      MDN文档上的
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

//随机点名
var arr = ['张三','张三三','里斯','李思思']
console.log(arr[getRandom(0,arr.length-1)]);
