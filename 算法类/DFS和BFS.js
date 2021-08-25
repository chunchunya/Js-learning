//DFS 深度优先遍历   递归版本
var deepFirstSearch = (node,nodeList)=>{
    nodeList = [];
    if(node){
        nodeList.push(node);
        let children = node.children;
        for(let i=0;i<children.length;i++){
            //每次递归的时候将需要遍历的节点和节点所存储的数组传下去
            deepFirstSearch(children[i],nodeList);
        }

    }
    return nodeList;
}

//DFS 非递归版本
var deepFirstSearch = (node)=>{
    let nodeList = [];
    if(node){
        let stack = [];
        stack.push(node);
        while(stack.length!==0){
            let item = stack.pop();
            nodeList.push(item);
            let children = item.children;
            for(let i=0;i<children.length;i++){
                stack.push(children[i]);
            }

        }


    }
    return nodeList;
}

//deepFirstSearch接受两个参数，第一个参数是需要遍历的节点，第二个是节点所存储的数组，并且返回遍历完之后的数组，该数组的元素顺序就是遍历顺序，调用方法：
        //let root = document.getElementById('root')
        // deepTraversal(root,nodeList=[])



//BFS 递归版本的BFS由于层级太深，会导致堆栈溢出。Maximum call stack size exceeded，但遍历的顺序依旧没有问题，可以在遍历过程中进行操作，不返回遍历数组即可。
//BFS 一般写非递归
var breadthFirstSearch = (node)=>{
    let nodes = [];
    if (node != null) {
        var queue = [];
        queue.unshift(node);
        while (queue.length != 0) {
            var item = queue.shift();
            nodes.push(item);
            var children = item.children;
            for (var i = 0; i < children.length; i++)
                queue.push(children[i]);
        }
    }
    return nodes;
}

//BFS 非递归版本  用到队列
var breadthFirstSearch = (node)=>{
    let nodes = [];
    if(node){
        let queue = [];
        queue.unshift(node);
        while(queue.length!==0){
            let item = queue.shift();
            nodes.push(item);
            let children = item.children;
            for(let i=0;i<children,length;i++){
                queue.push(children[i]);
            }
        }

    }
    return nodes;
}