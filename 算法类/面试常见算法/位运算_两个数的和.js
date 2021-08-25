let m = 5,n = 7;
let sum = (a,b)=>{
    if(a === 0) return b;
    if(b === 0) return a;       //必须要加这两行啊，要不然不满足的情况会越界
    let newA = a^b;
    let newB = (a&b)<<1;
    return sum(newA,newB);
}
console.log(sum(m,n));

