//利用快排算第K大的数
// let quickSort = (arr,left,right)=>{
//     if(left>right) return;
//
//     let i = left;
//     let j = right;
//     let key = arr[left];
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
//     quickSort(arr,left,i-1);
//     quickSort(arr,j+1,right);
//     return arr;
// }
// let numm = [5,4,3,2,1];
// let sort_numm = quickSort(numm,0,numm.length-1)
// //倒数第3大的数
// let K_index = sort_numm.length-3
// let K_large = sort_numm[K_index]
// console.log(K_large);

//另一种实现方式

let quickSort = (arr,k,left,right)=>{
    if(left>right) return;

    let i = left;
    let j = right;
    let kk = arr.length-k;
    let key = arr[kk];
    while(i<j){
        while(i<j&&arr[j]>=key){
            j--;
        }
        arr[i] = arr[j];
        while(i<j&&arr[i]<=key){
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = key;
    return i;
}
let numm = [5,4,3,2,1];
let i = quickSort(numm,3,0,numm.length-1)
console.log(i)