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
var rightSideView = function(root) {
    if(!root) return [];
    const result = [];
    const queue = [root];

    while(queue.length > 0){
        let n = queue.length;
        while(n--){
            var node = queue.shift();

            if(node && node.left){
                queue.push(node.left);
            }
            if(node && node.right){
                queue.push(node.right);
            }
        }
        result.push(node.val);
        queue.push();
    }

    return result;
    
};


function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(1, 
    new TreeNode(2, null, new TreeNode(5)), 
    new TreeNode(3, null, new TreeNode(4))
);

const rightView = rightSideView(root);
console.log(rightView); // Output: [1, 3, 4]
