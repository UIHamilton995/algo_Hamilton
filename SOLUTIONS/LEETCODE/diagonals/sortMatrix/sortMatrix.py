class Solution:
  def sortMatrix(self, grid: List[List[int]]) -> List[List[int]]:
    row = len(grid)          # number of rows
    column = len(grid[0])    # number of columns
    diagonals = {}           # dictionary to hold diagonals by key = i - j

    # Step 1: Collect values from each diagonal
    for i in range(row):
      for j in range(column):
        key = i - j
        if key not in diagonals:
          diagonals[key] = []
        diagonals[key].append(grid[i][j])
    
    # Step 2: Sort each diagonal in descending order
    # (so we can pop from the end later and get smallest first)
    for key in diagonals:
      diagonals[key].sort(reverse = True)
      
    # Step 3: Rewrite grid with sorted values
    for i in range(row):
      for j in range(column):
        key = i - j
        # Pop last element (smallest remaining value)
        grid[i][j] = diagonals[key].pop()
        
    return grid    
          