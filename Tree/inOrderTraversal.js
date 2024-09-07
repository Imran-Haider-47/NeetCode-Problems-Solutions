/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = [];

    function traverse(node){
        if(node ==null) return;
        traverse(node.left);
        stack.push(node.val);
        traverse(node.right);
    }

    traverse(root);
    return stack;

     
};


// Definition for a binary tree node.
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

// Create the binary tree: 
//      4
//     / \
//    2   5
//   / \    \
//  1   3    6

let root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(6);

// Test the inorderTraversal function
let result = inorderTraversal(root);
console.log(result);  // Output: [1, 2, 3, 4, 5, 6]


