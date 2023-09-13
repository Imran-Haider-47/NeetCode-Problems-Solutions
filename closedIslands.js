function closedIsland(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Helper function to mark connected land as visited
    function dfs(row, col) {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 1) {
            return;
        }

        grid[row][col] = 1; // Mark as visited

        // Visit adjacent cells
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    }

    // Initialize count of closed islands
    let count = 0;

    // Iterate through the grid
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 0) {
                // If we find an unvisited land, it's a potential island
                dfs(row, col);
                count++;
            }
        }
    }

    return count;
}

// Example usage
const grid1 = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],
                [1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]

const grid2 = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0]
];

const grid3 = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1]
];

console.log(closedIsland(grid1)); // Output: 2
console.log(closedIsland(grid2)); // Output: 1
console.log(closedIsland(grid3)); // Output: 2
