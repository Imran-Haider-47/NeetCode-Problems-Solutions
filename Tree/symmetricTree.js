var symmetricTree = function (root) {
   
    function DFS(left, right){
        if(left==null && right == null){
            return true;
        }
        if(left == null || right == null){
            return false;
        }
        return (left.val == right.val && DFS(left.left, right.right) && DFS(left.right, right.left));

        
    } 
    return DFS(root.left, root.right);

};

let TreeNode = function(val, left=null, right=null){
    this.val = val;
    this.left = left;
    this.right = right;
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);

tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(3);



let result = symmetricTree(tree1);
console.log(result);