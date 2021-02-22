let tim = new Date('2020',5,5,23,33,44);
console.log(tim);
let tim_now = Date.now();
console.log(tim_now);
tim1 = tim_now.toDateString()
console.log(tim1);
tim2 = tim_now.toTimeString()
console.log(tim2);
tim3 = tim_now.toLocaleDateString()
console.log(tim3);
tim4 = tim_now.toLocaleTimeString()
console.log(tim4);
tim5 = tim_now.toUTCString()    //规范建议新代码使用toUTCString();
console.log(tim5);