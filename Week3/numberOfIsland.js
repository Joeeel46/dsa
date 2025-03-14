class Solution {
    bfs(row, col, grid, visited) {
      const queue = [[row, col]];
      visited[row][col] = true;
  
      const directions = [
        [1, 0], [-1, 0], [0, 1], [0, -1] // Down, Up, Right, Left
      ];
  
      while (queue.length) {
        const [currentRow, currentCol] = queue.shift();
  
        for (const [dRow, dCol] of directions) {
          const newRow = currentRow + dRow;
          const newCol = currentCol + dCol;
  
          if (
            newRow >= 0 && newRow < grid.length &&
            newCol >= 0 && newCol < grid[0].length &&
            grid[newRow][newCol] === '1' && !visited[newRow][newCol]
          ) {
            visited[newRow][newCol] = true;
            queue.push([newRow, newCol]);
          }
        }
      }
    }
  
    numIslands(grid) {
      const rows = grid.length;
      const cols = grid[0].length;
      const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
      let islandCount = 0;
  
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          if (grid[row][col] === '1' && !visited[row][col]) {
            islandCount++;
            this.bfs(row, col, grid, visited);
          }
        }
      }
  
      return islandCount;
    }
  }
  
  // Example usage
  const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ];
  
  const solution = new Solution();
  console.log(solution.numIslands(grid)); // Output: 3
  