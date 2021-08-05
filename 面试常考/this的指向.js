var name =222;
var a = {
    name: 111,
    say: function(){
        console.log(this.name)
    }
}
var fun = a.say;
fun();   //fun.call(window)  === 222
a.say();  //a.say.call(a)   === 111


var b = {
    name: 123,
    say: function(fun){
        fun();
    }
}
b.say(a.say);    //  等同于fun = a.say; fun()   fun.call(window)   ===222
b.say = a.say;
b.say();         // b.say.call(b) === 123