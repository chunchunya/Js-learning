// var Linknode = (val)=>{
//     this.val = val;
//     this.next = next;
// }
//
// let reverseLink = (head)=>{
//     if(!head||!head.next){
//         return head;
//     }
//     let slow = null;
//     let fast = head;
//     while(fast){
//         let next = fast.next;
//         fast.next = slow;
//         slow = fast;
//         fast = next;
//     }
//     return slow;
// }

let num = [1,2,3,6,4,2,1]
n= num.splice(2,1)
console.log(num)
console.log(n)