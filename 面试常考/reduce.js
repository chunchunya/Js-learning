//数组求和  求积
let arr = [1,2,3,4];
let sum = arr.reduce(function(prev,cur){return prev+cur});
console.log(sum);

//计算数组中每个元素出现的次数
let person = ['张鱼鱼','郑威威','樟醇醇','樟醇醇','郑薇薇','郑威威','鲤鱼','哇哇'];
let count = person.reduce((prev,cur)=>{
    if(cur in prev) {
        prev[cur]++;
    }else{
        prev[cur] = 1;
    }
    return prev;
},{})
console.log(count);

//reduce实现数组的扁平化
let arr1 = [1,2,[3,4,5,[6,7,[8]]],9];
let newArr = (arr)=>{
    return arr.reduce(function(prev,cur){
        return prev.concat((Array.isArray(cur))?newArr(cur):cur)
    },[])
}
console.log(newArr(arr1));

//实现数组去重
let arr2 = [1,2,3,3,4,4,4,5,6,7,8,8,9];
let newArr1 = (arr)=>{
    return arr.reduce((prev,cur)=>{
        if(prev.includes(cur)){
            return prev;
        }else{
            // prev.push(cur)
            prev = prev.concat(cur);
        }
        return prev
    },[])
}
console.log(newArr1(arr2));
