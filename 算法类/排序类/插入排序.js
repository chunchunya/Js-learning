let array = [8,3,6,1,4,2,0]
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        for(let j =i;j>=0;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
            }
        }
    }
    return arr;
}

let newArray = insertionSort(array);
console.log(newArray);