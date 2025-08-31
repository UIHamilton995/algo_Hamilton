function isValidSudoku(board) {
  // use sets to track seen numbers for rows, columns and subgrids
  const rows = Array.from({length: 9}, () => new Set())
  const columns = Array.from({length: 9}, () => new Set())
  const subgrids = Array.from({ length: 9 }, () => new Set())
  
  for (let r = 0; r < 9; r++){
    for (let c = 0; c < 9; c++){
      let value = board[r][c]
      if (value === ".") continue   // skip empty cells
      
      // check row
      if (rows[r].has(value)) { return false }
      rows[r].add(value)

      // check columns
      if (columns[c].has(value)) { return false }
      columns[c].add(value)

      // check subgrid
      // formula is like that of diagonal trick calculation -> map cell to subgrid index
      let subgridIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)
      
      if (subgrids[subgridIndex].has(value)) { return false }
      subgrids[subgridIndex].add(value)
    }
  }

  // because we are concerned about the truthfulness of validity, we;
  return true
}