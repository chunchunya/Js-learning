//刚把思路整明白，得多看...自己拿例子去试试，就明白了

let array = [8,3,6,1,4,2,0]

function sheelSort(arr) {
    for (let gap = arr.length / 2; gap >= 1;) {     //这个gap是增量，也可以取别的值
        for (let i = gap; i < arr.length; i++) {
            let j = i;
            while (j > 0 && arr[j] < arr[j - gap]) {
                [arr[j],arr[j-gap]] = [arr[j-gap],arr[j]];
                j -= gap
            }
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}

console.log(sheelSort(array));