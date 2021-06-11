let array = [8,3,6,1,4,2,0]

function quickSort(arr,left,right){
    if(left>right) return;   //这句必须加！否则会越界！！！
    let i = left,j = right;
    const key = arr[left];
    while(i<j){
        while(i<j&&arr[j]>=key){       //带一个例子特别好解释
            j--;
        }
        arr[i] = arr[j];
        while(i<j&&arr[i]<=key){
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = key
    quickSort(arr,left,i-1);
    quickSort(arr,j+1,right);
    return arr;
}
let newArray = quickSort(array,0,array.length-1);
console.log(newArray);