/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const stack = [];
    const res = [];
    function backTrack(openedN, closedN){
        if(openedN===closedN && closedN===n){
            res.push(stack.join('')); // Push the joined string to the res array
            return;
        }
        if (openedN < n){
            stack.push('(');
            backTrack(openedN+1, closedN); 
            stack.pop();
        }
        if (closedN < openedN){
            stack.push(')');
            backTrack(openedN, closedN+1);
            stack.pop();
        }
    }
    backTrack(0,0);
    return res;
};

console.log(generateParenthesis(3));
