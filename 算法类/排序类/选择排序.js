let array = [8,3,6,1,4,2,0]
function selectionSort(arr){
    for(let j=0;j<arr.length;j++){     //第一轮循环（相当于趟）
        let minIndex =j;
        for(let i =minIndex;i<arr.length;i++){   //第一趟里寻找最小的数（通过找最小值的索引）
            if(arr[minIndex]>arr[i+1]){
                minIndex = i+1;
            }
        }
        [arr[j],arr[minIndex]] = [arr[minIndex],arr[j]];  //第一趟找到最小的数的索引后和最前面的索引交换，交换后进行第二趟，相当于去掉了第一个数
    }
    return arr;
}
let newArray = selectionSort(array);
console.log(newArray);