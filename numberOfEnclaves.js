/**
 * @param {number[][]} grid
 * @return {number}
 */

const dfs = function(grid, row, col){
    if(row< 0 || row >= grid.length || col<0 || col>= grid[0].length || grid[row][col]===0){
        return;
    }
    grid[row][col]=0;

    dfs(grid, row,col+1);
    dfs(grid,row,col-1);
    dfs(grid,row-1,col);
    dfs(grid,row+1,col);

}
var numEnclaves = function(grid) {
    
    var last_column = grid[0].length-1;
    var last_row = grid.length-1;
    // Applying DFS on the first column and last column
    for(let row=0; row< grid.length;row++){
        
        // firs column
        if(grid[row][0]===1){
            dfs(grid, row, 0);
        }
        //last column
        if(grid[row][last_column]===1){
            dfs(grid,row,last_column);
        }
    }

    //Similarly Apply DFS on first row and last row
    for(let col=0; col< grid[0].length; col++){
        // first row
        if(grid[0][col]===1){
            dfs(grid,0,col);
        }
        // last row
        if(grid[last_row][col]===1){
            dfs(grid,last_row,col);
        }
    }

    let count =0;
    for(let i=0; i< grid.length;i++){
        for(let j=0; j< grid[0].length; j++){
            if(grid[i][j]===1){
                count++;
            }
        }
    }
    return count;

};

const grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]; // output should be 3
console.log(numEnclaves(grid));
