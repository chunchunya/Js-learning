//利用对象封装自己的数学对象 里面有PI最大值和最小值
var myMath = {
    PI:3.1415926,
    max:function (){
        var max = arguments[0];
        for (var i = 1;i < arguments.length;i++){
            if(arguments[i]>max){
                max = arguments[i];
            }
        }
        return max;
    },
    min:function (){
        var min = arguments[0];
        for (var i = 1;i < arguments.length;i++){
            if(arguments[i]<min){
                min = arguments[i];
            }
        }
        return min;
    }
}
console.log(myMath.PI)
console.log(myMath.max(1,2,9))
console.log(myMath.min(1,2,7))