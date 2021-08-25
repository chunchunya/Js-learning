let arr = [5,7,2,0,6,4,8,3,2,1]

// //冒泡
// function bubble(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubble(arr));

// //选择排序
// function select(arr){
//     for(let i=0;i<arr.length-1;i++){
//         let minIndex = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[minIndex]){
//                 minIndex = j;
//             }
//         }
//         [arr[minIndex],arr[i]]= [arr[i],arr[minIndex]];  //这里有点卡壳
//     }
//     return arr;
// }
// console.log(select(arr));

// //插入排序  从后往前比较
// function insert(arr){
//     for(let i=1;i<arr.length;i++){
//         for(let j=i;j>=0;j--){
//             if(arr[j]<arr[j-1]){
//                 [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// console.log(insert(arr));

// //折半插入
// function binaryInsertionSort(arr){
//     for(let i=1;i<arr.length;i++){    //第一个数不需要排，其他剩余几个值就要排几次
//         var current=arr[i],left=0,right=i-1;    //i的值等于当前排序值的索引
//         while(left<=right){
//             var middle=Math.floor((left+right)/2);
//             if(current<arr[middle]){
//                 right=middle-1;
//             }else{    //等于的情况下，继续在后面进行折半插入排序，最终新插入的值会排在后面
//                 left=middle+1;
//             }
//         }
//         //找到插入的位置
//         for(var j=i-1;j>=left;j--){    //将 left 后边的数组整体后移一位
//             arr[j+1]=arr[j];
//         }
//         arr[left]=current;    //把插入值放置在空出来的位置
//     }
// }
// console.log(binaryInsertionSort(arr));


// //快速排序
// function quick(arr,left,right){
//     if(left>right){
//         return false;
//     }
//     let i = left;
//     let j = right;
//     let key = arr[i];
//     while(i<j){
//         while(i<j&&arr[j]>=key){
//             j--;
//         }
//         arr[i] = arr[j];
//         while(i<j&&arr[i]<=key){
//             i++;
//         }
//         arr[j] = arr[i];
//     }
//     arr[i] = key;
//     quick(arr,left,i-1);
//     quick(arr,j+1,right);
//
//     return arr;
// }
// console.log(quick(arr,0,arr.length-1));

// //希尔排序
// function sheelSort(arr) {
//     for (let gap = arr.length / 2; gap >= 1;) {     //这个gap是增量，也可以取别的值
//         for (let i = gap; i < arr.length; i++) {
//             let j = i;
//             while (j > 0 && arr[j] < arr[j - gap]) {
//                 [arr[j],arr[j-gap]] = [arr[j-gap],arr[j]];
//                 j -= gap
//             }
//         }
//         gap = Math.floor(gap / 2);
//     }
//     return arr;
// }
// console.log(sheelSort(arr));


// //let 不会变量提升
// let myname= '极客时间'
// {
//     console.log(myname)
//     // let myname= '极客邦'
// }
//
// function bar() {
//     console.log(myName)
// }
// function foo() {
//     var myName = " 极客邦 "
//     bar()
// }
// var myName = " 极客时间 "
// foo()       //极客时间

// let s = 'ww';
// for(let i=0;i<s.length;i++){
//     let k = s.indexOf(s[i]);
//     console.log(k);
//     let index = s.indexOf(s[i],k+1);
//     console.log(index);
// }


let map = new Map();
map.set("a",1);
map.set("b",2);
map.set("c",4);
map.set("d",5);
console.log(map.entries());
console.log([...map]);
