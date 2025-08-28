def findDiagonalOrder(mat):
  # number of rows in the matrix
  m = len(mat)
  
  # number of columns in the matrix
  # mat[0] means the very first row, len(mat[0]) counts how many columns that row has
  # this gives us the number of columns for the entire matrix
  n = len(mat[0])
  
  # store for our final diagonal traversal
  store = []
  
  # loop over all diagonals
  # the maximum diagonal index we can get is (m-1) + (n-1) = m + n - 2
  for d in range(m + n - 2):
    packer = [] # temporary storage for this diagonal
    
    # row range calculation
    # rowStart = the lowest row index possible on this diagonal
    #   can't be less than 0 (no negative rows)
    #   also must be at least d - (n - 1) because we can't go beyond the last column
    rowStart = max(0, d - (n -1))
    
    # rowEnd = the highest row index possible on this diagonal
    #   can't be more than m - 1 (last row)
    #   also at most "d" since r + c = d
    rowEnd = min(m - 1, d)
    
    # collect all cells where r + c = d
    for r in range(rowStart, rowEnd + 1):
      c = d - r
      packer.append(mat[r][c])
      
    # for even diagonals, reverse the local order for the zigzag pattern
    if(d % 2 == 0):
      packer.reverse()
      
    # add this diagonal's elements into our store
    store.extend(packer)
    
  return store
  