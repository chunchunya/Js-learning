let baseType = ['undefined','null','string','number','boolean','bigInt','symbol']
// 变量R的原型 存在于 变量L的原型链上
let instance_of = (L,R)=>{
    // 验证如果为基本数据类型，就直接返回false
    if(baseType.includes(typeof(L))){
        return false;
    }
    let RP = R.prototype;    // 取 R 的显示原型
    L = L.__proto__;         // 取 L 的隐式原型
    while(true){             // 无线循环的写法（也可以使 for(;;) ）
        if(L === null){      // 找到最顶层
            return false;
        }
        if(L === RP){        // 严格相等
            return true;
        }
        L = L.__proto__;     // 没找到继续向上一层原型链查找
    }
}