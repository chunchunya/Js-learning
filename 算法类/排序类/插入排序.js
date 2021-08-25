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


//折半插入
function binaryInsertionSort(arr){
    for(let i=1;i<arr.length;i++){    //第一个数不需要排，其他剩余几个值就要排几次
        var current=arr[i],left=0,right=i-1;    //i的值等于当前排序值的索引
        while(left<=right){
            var middle=Math.floor((left+right)/2);
            if(current<arr[middle]){
                right=middle-1;
            }else{    //等于的情况下，继续在后面进行折半插入排序，最终新插入的值会排在后面
                left=middle+1;
            }
        }
        //找到插入的位置
        for(var j=i-1;j>=left;j--){    //把插入值前一个的值到插入位置的值全部往后移动一位
            arr[j+1]=arr[j];
        }
        arr[left]=current;    //把插入值放置在空出来的位置
    }
}