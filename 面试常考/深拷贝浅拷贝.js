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

}