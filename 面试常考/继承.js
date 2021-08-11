// //原型继承
// function F(){
//     this.name = ['aa','bb','cc']
// }
// F.prototype.age = '26'
// F.prototype.sayNmae = function(){
//    return this.name;
// }
// let f1 = new F();
// let f2 = new F();
//
// console.log(f1.sayNmae());   //[ 'aa', 'bb', 'cc' ]
// console.log(f2.age);   //26
//
// function F_child(){
// }
//
// F_child.prototype = new F();
// let f_child1 = new F_child();
// let f_child2 = new F_child();
//
//
// f_child1.name.push('dd')
//
// console.log(f_child1.sayNmae())   //[ 'aa', 'bb', 'cc', 'dd' ]
//
// console.log(f_child2.sayNmae())   //[ 'aa', 'bb', 'cc', 'dd' ]


// //构造函数继承
// function M(age){
//     this.name = [ 'aa', 'bb', 'cc', 'dd' ];
//     this.age = age;
//     this.sayAge = function(){
//         console.log(this.age);
//     }
// }
// function M_child(age){
//     M.call(this,age);
// }
// let m_child1 = new M_child(29);
// console.log(m_child1.name);
// console.log(m_child1.age);

// //组合继承
// function S(name){
//     this.name = name;
//     this.colors = ['red','white','yellow']
// }
// S.prototype.sayName = function(){
//     return this.name;
// }
// function S_child(name,age){
//     S.call(this,name);
//     this.age = age;
// }
//
//
// S_child.prototype = new S();
//
// S_child.prototype.sayAge = function(){
//     return this.age
// }
// let s_child1 = new S_child('zhangyuchun1',20);
// s_child1.colors.push("pink");
//
// let s_child2 = new S_child('zhangyuchun2',30);
//
// console.log(s_child1.sayName());
// console.log(s_child1.sayAge());
// console.log(s_child1.colors);
// console.log(s_child2.sayName());
// console.log(s_child2.colors);
// console.log(s_child2.sayAge());

// //原型式继承
// var person = {
//     name: 'kevin',
//     friends: ['daisy', 'kelly']
// }
//
// var person1 = createObj(person);
// var person2 = createObj(person);
//
// // person1.name = 'person1';
// console.log(person1.name);
// console.log(person2.name); // kevin
//
// person1.firends.push('taylor');
// console.log(person2.friends); // ["daisy", "kelly", "taylor"]

// 寄生式函数继承
// 寄生式组合继承