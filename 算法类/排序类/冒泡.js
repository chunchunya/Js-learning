let array = [8,3,6,1,4,2,0]
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                // let temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];    //芜湖！
            }
        }
    }
    return arr;
}

let newArray = bubbleSort(array);
console.log(newArray);
