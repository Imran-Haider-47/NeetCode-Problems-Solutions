/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let idx =0;
    function tree(preorder, inorder, start, end){
        if(start>end){
            return null;
        }
        var rootval = preorder[idx];
        idx++;
        let i = inorder.indexOf(rootval);

        let root = new TreeNode(rootval);
         root.left = tree(preorder, inorder, start, i - 1);
        root.right = tree(preorder, inorder, i + 1, end);

        return root;


    }
    return tree(preorder, inorder, 0, inorder.length-1);

};