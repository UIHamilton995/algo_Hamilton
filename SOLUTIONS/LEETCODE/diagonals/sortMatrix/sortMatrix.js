function sortMatrix(grid) {
  // to track the number of rows and columns 
  let rows = grid.length
  let columns = grid[0].length

  // object (hashmap) to store and monitor diagonals grouped by key = i - j
  let diagonals = {} 

  // Step 1: Collect values from each diagonal
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      // Diagonal key is based on row - column index
      const key = i - j

      // Initialize this diagonal if not created yet
      if (!diagonals[key]) diagonals[key] = []
      
      // Push current cell into the correct diagonal bucket
      diagonals[key].push(grid[i][j])
    }
  }

  // Step 2: Sort each diagonal in descending order
  // (we want the largest numbers to come first, so that
  // popping from the end later gives the smallest values first)
  for (let key in diagonals) {
    // declare k as the numerical value of key
    const k = Number(key)
    if (k < 0) {
      // needs ascending when filling -> store descending so pop() gives ascending
      diagonals[key].sort((a, b) => b - a)
    } else {
      // needs descending when filling -> store ascending so pop() gives descending
      diagonals[key].sort((a, b) => a - b)
    }
  }

  // write back using pop()
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      // Diagonal key is based on row - column index
      const key = i - j
      grid[i][j] = diagonals[key].pop()
    }
  }

  return grid
}