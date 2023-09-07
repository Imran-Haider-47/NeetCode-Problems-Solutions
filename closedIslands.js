function closedIsland(grid) {
    const rows = grid.length;
    const cols = grid[0].length;


    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 1) {
            return;
        }

        grid[row][col] = 1; //  visited

        
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }

    let count = 0;

    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 0) {
                // If we find an unvisited land, it's a new island
                dfs(row, col);
                count++;
            }
        }
    }

    return count;
}

const grid = [
    [1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
];

console.log(closedIsland(grid)); // Output: 1
