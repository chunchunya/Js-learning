//第一种利用数组的.flat（）方法   arr.flat(Infinity)

// //正则方法
let arr = [1,[2,3,4,5,[6,7,[8]]],9];
// let arr1 = JSON.stringify(arr).replace(/\[|\]/g,"");
// console.log(arr1);   //1,2,3,4,5,6,7,8,9
// let arr2 = JSON.parse('['+ arr1 +']');
// console.log(arr2);

//递归方法
let newArr = [];
function squeeze(arr){
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            squeeze(arr[i]);
        }else{
            newArr.push(arr[i]);   //这里必须写成else形式
        }
    }
    return newArr
}
let arr3 = squeeze(arr);
console.log(arr3);
