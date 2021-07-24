


//手写map方法
function map1(arr,callback){
    if(!Array.isArray(arr)||!arr.length||typeof callback !== 'function'){
        return [];
    }else{
        let result = [];
        for(let i=0;i<arr.length;i++){
           result.push(callback(arr[i],i,arr))
            }
        return result;
        }
}

//map方法中的参数是一个函数方法，返回一个新数组
var array = [1,2,3,4,5];
var newArr = map1(array,(item,index)=>{
    return item+index;
})
console.log(newArr);