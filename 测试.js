//定义一个链表
function ListNode(val,next){
    this.val = (val === undefined? 0:val);
    this.next = (next === undefined? null:next);
}
//定义一个a链表，然后将其赋值给b,然后相当于对象的赋值，两个变量指向的是同一个地址，所以之后改变a的
let a = new ListNode(0);
let b = a;
b.next = 3;
console.log(b);// ListNode { val: 0, next: 3 }
console.log(a);// ListNode { val: 0, next: 3 }  a和b的值是一样的，应该是指向的同一个地址  变量保存在栈中,地址保存在堆中，堆中的内容是不变的
b = b.next;
a.next = 7;
console.log(b);  // 3
console.log(a);  // ListNode { val: 0, next: 7 }
