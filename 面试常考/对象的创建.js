let person = {
    name:"伟哥",
    age:"24",
    sex: '女'
}
let {name:presonName,age:personAge} = person;//语法糖 这里注意一定是对象的属性在前，变量在后
console.log(presonName);
console.log(personAge);

let {sex1="男"} = person;   //定义默认值只适用于前面对象中该属性不存在的情况
console.log(sex);
console.log(sex1)
