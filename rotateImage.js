/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


var rotate = function(matrix) {
    
    // step 1 : Taking Transpose
    for(let i=0;i < matrix.length; i++ ){
        for(let j=i; j < matrix.length;j++ ){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    // Step 2: Reverse each row 
    for (let i=0; i< matrix.length;i++)
    {
        matrix[i].reverse();
    }
    return matrix;
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix))