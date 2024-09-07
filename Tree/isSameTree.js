var isSameTree = function (p, q) {
    if(p==null && q==null) return true;
    if(p===null || q===null) return false;

    if(p.val != q.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};

let TreeNode = function(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

let tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

let result = isSameTree(tree1, tree2);
console.log(result);