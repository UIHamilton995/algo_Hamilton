function countByX(n, x) {
  let z = []
  let multiple = n * x

  while (n >= 1) {
    z.unshift(multiple) // move multiple, first value into the z array
    multiple -= x // subtract x from multiple
    n-- // keep subtracting x from the value of multiple just before the point index 0 = x
  }
  
  return z
}