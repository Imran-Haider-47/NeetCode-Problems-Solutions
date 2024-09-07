
let postOrderTraversal = function (root) {
    let stack = [];
    
    function traverse (node){
        if(node==null) return;
        traverse(node.left);
        traverse(node.right);
        stack.push(node.val);
    }
    traverse(root);
    return stack;
}

// let's create a TreeNode function
function TreeNode(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;

}

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(6);

let result = postOrderTraversal(root);
console.log(result);
