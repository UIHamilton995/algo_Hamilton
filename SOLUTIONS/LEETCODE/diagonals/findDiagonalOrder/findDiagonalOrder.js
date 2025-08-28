function findDiagonalOrder(mat) {
  // rows (height of the matrix)
  const m = mat.length
  // columns (using the the length of the first row which is equal to that of other rows)
  const n = mat[0].length
  // create a store for the final traversal
  const result = []

  // formula for diagonal matrices is d = r + c
  // smallest d is [0], top left cell
  // largest d calculation; d = (m-1) + (n-1) = m + n - 2 (bottom right cell)
  for (let d = 0; d <= m + n - 2; d++){
    // empty array to collect iterables as the loop runs
    const packer = []

    // derive valid row range for this diagonal
    // from r >= 0 and c = d - r <= n - 1 => r >= d - (n - 1)
    // from r <= m - 1 and c = d - r >= 0 => r <= d
    // combine and clamp to matrix bounds:
    const rowStart = Math.max(0, d - (n - 1))
    const rowEnd = Math.min(m - 1, d)

    // traverse every (r,c) where d = r + c is valid
    for (let r = rowStart; r <= rowEnd; r++){
      const c = d - r;   // because r + c must equal to d
      packer.push(mat[r][c])
    }

    // zigzag requisite:
    // even d => traverse up right => reverse the local order we just collected
    if (d % 2 === 0) packer.reverse
    
    // append this diagonal to the final result
    result.push(...packer)
  }
  // collect all the numbers in diagonally calculated order
  return result
}