var quickSort = (arr,left,right)=>{
    if(left > right){
        return;
    }
    let i = left;
    let j = right;
    let key = arr[left];
    while(j>i){
        while(j>i&&arr[j]>=key){
            j--;
        }
        arr[i] = arr[j];
        while(j>i&&arr[i]<=key){
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = key;
    quickSort(arr,left,i-1);
    quickSort(arr,j+1,right);
    return arr;
}

let arr = [9,5,2,7,3,1,0]
let arr1 = quickSort(arr,0,arr.length-1);
console.log(arr1);