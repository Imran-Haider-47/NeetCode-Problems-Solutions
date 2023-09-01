/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(var i=1; i< matrix.length;i++){
        for(var j=1; j< matrix[i].length; j++){
            if(matrix[i][j]!= matrix[i-1][j-1]){
                return false;
            }
        }
    }
    return true;

};
const m= [[1,2],[2,2]];
console.log(isToeplitzMatrix(m));