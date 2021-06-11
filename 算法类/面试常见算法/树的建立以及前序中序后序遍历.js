var TreeNode = (val)=>{
    this.val = val;
    this.left = null;
    this.right = null;
}

//递归方法
// var traversal = (root)=>{
//     if(root){
//         // //先序
//         // console.log(root);
//         // traversal(root.left);
//         // traversal(root.right);
//
//         // //中序
//         // traversal(root.left);
//         // console.log(root);
//         // traversal(root.right);
//
//         //后序
//         traversal(root.left);
//         traversal(root.right);
//         console.log(root);
//     }
// }

//非递归方法
//前序
var pre = (root)=>{
    if(root) {
        let stack = [];
        //先将根节点push
        stack.push(root);
        //判断栈中是否为空
        while (stack.length > 0) {
            //弹出栈顶元素
            root = stack.pop();
            console.log(root);
            //因为先序遍历是先左后右，栈是先进后出结构
            //所以先push右边再push左边
            if (root.right) {
                stack.push(root.right);
            }
            if (root.left) {
                stack.push(root.left);
            }
        }
    }
}

//中序
//中序遍历是先左再根最后右
//所以首先应该先把最左边的节点遍历到底依次push进栈
//当左边没有节点时，就打印栈顶元素，然后寻找右节点
//对于最左边的叶节点来说，可以把它看作两个null节点的父节点
//左边打印不出东西就把父节点拿出来打印然后再看右节点
var middle = (root)=> {
    if (root) {
        let stack = [];
        while(stack.length>0||root){
            if(root){
                stack.push(root);
                root = root.left;   //一直往左走走到最左边的叶节点，相当于把最左边的叶节点当作父节点
            }else{
                root = stack.pop();
                console.log(root);
                root = root.right;
            }
        }
    }
}

//后序遍历
//使用两个栈来实现遍历
var post = (root)=>{
    if(root){
        let stack1 = [];
        let stack2 = [];
        //后序遍历是先左再右最后根
        //所以对于一个栈来说，应该先push根节点
        //然后push右节点，最后push左节点
        stack1.push(root);
        while(stack1.length>0){
            root = stack1.pop();
            stack2.push(root);
            if(root.left){
                stack1.push(root.left);
            }
            if(root.right){
                stack1.push(root.right);
            }

        }
        while(stack2.length>0){
            console.log(stack2.pop());
        }
    }
}