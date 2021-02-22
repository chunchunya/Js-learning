
    let nums= [1,2,3,4,5,6,7]
    let k=3
    let n = nums.length
    let _k = k % n
    console.log(nums.splice(1,1))
    console.log(nums)
    nums.splice(0, 0, ...nums.splice(n - _k))
    console.log(nums)


