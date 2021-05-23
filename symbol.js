let mySymbol = Symbol();

let obj = {
    name: 'smyhvae',
    age: 26
};

obj[mySymbol] = 'hello';

console.log(obj);

//遍历obj
for (let i in obj) {
    console.log(i);
}