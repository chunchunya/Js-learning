const f = function fn() {
    console.log(1)
}
f()
fn()    //undefined    具名函数只能在函数内部访问到，外部就访问不到了
//一般，采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只能在函数体内部有效，在函数体外部无效。