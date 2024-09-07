
var preOrderTraversal = function (root) {
    let stack = [];

    function traverse(node) {
        if (node == null) return;
        stack.push(node.val);
        traverse(node.left);
        traverse(node.right);
        
    }

    traverse(root);
    return stack;

}

// Let's create a tree
//           4
//          / \
//        2   5
//       / \   \
//      1  3    6 

function TreeNode(val, left = null, right = null ){
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

let result = preOrderTraversal(root);
console.log(result);