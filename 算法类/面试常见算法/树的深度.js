//求出一颗二叉树的最大深度
var maxDepth = (root)=>{
    if(!root) return 0;
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
}