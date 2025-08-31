def isValidSudoku(board):
  # Use sets to track seen numbers for rows, cols, and subgrids
  rows = [set() for _ in range(9)]
  columns = [set() for _ in range(9)]
  subgrids = [set() for _ in range(9)]
  
  # loop through rows and columns and subgrid
  for r in range(9):
    for c in range(9):
      value = board[r][c]
  
      if value == ".":
        continue   # skip empty cells
      
      if value in rows: return False
      rows[r].add(value)
      
      if value in columns: return False
      columns[c].add(value)
      
      # Formula: map each cell(r,c) -> a 0-8 index for its 3x3 subgrids
      subgridIndex = (r//3) * 3 + (c//3)
      if value in subgrids[subgridIndex]: return False
      subgrids[subgridIndex].add(value)
       
  return True
      
      