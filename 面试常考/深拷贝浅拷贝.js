//深拷贝1
let deepCopy = (newObj,oldObj)=>{
    for(let key in oldObj){
        let item= oldObj[key];
        if(item instanceof Array){
            newObj[key] = [];
            deepCopy(newObj[key],item);

        }else if(item instanceof Object){
            newObj[key] = {};
            deepCopy(newObj[key],item);
        }else{
            newObj[key] = item;
        }
    }
    return newObj;
}

//深拷贝2的写法
let deepCopy2 = (obj)=>{
    let copyObj = {};
    if(obj === null) return obj;    //null也是一个空对象
    if(obj instanceof Date) return new Date(obj);   //判断日期和正则
    if(obj instanceof RegExp) return RegExp(obj);
    if(typeof obj !== 'object') return obj;
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            copyObj[key] = deepCopy2(obj[key]);
        }

    }
    return copyObj;
}

//深拷贝还可以用JSON.parse(JSON.stringify(obj))  但是缺点是函数不拷贝，正则也不拷贝

//浅拷贝
let shallowCopy = (oldObj)=>{
    let newObj = {};
    for(let i in oldObj){
        if(oldObj.hasOwnProperty(i)){
            newObj[i] = oldObj[i];
        }

    }
    return newObj;
}

var obj1 = {
    name: '你的名字',
    age: 30,
    hobby:{
        '体育':'打篮球',
        '学习':'看书',
        '生活':'逛街'
    }
}

var obj2 = shallowCopy(obj1);

var obj3 = deepCopy({},obj1);
var obj4 = deepCopy2(obj1)

obj2.name = "变成obj2的名字";
obj2.hobby['体育']= 'obj2打羽毛球';


obj3.name = "变成obj3的名字";
obj3.hobby['体育'] = 'obj3打羽毛球';

obj4.name = "变成obj4的名字";
obj4.hobby['体育'] = 'obj4打羽毛球';

console.log(obj1);       //对于obj2的浅拷贝，name没有变，还是原来的"你的名字"  对象中的"体育"属性变了，变成了和obj2改的一样的   对于obj3的深拷贝，都没有变，两者互不影响
console.log(obj2);
console.log(obj3);
console.log(obj4);