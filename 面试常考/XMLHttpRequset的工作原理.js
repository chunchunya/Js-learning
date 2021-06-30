//ajax get请求
let res = new XMLHttpRequest();
res.open('get',url);
res.send();
res.onreadystatechange = ()=>{
    if(res.readyState == 4&&res.status==200){
        console.log("请求成功了！！")
    }
}

// post请求
let res1 = new XMLHttpRequest();
res1.open("post",url);
res.setRequestHeader("Content-type","application/x-www-form-urlencoded");
res.send("name=xxx&age=xxx");
res.onreadystatechange = ()=>{
    if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText);
    }
}
