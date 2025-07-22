function countByX(n, x) {
  let z = []
  let multiple = n * x

  while (n >= 1 &&  x >= 1) {
    z.push(multiple) // move multiple, first value into the z array
    multiple = multiple - x // subtract x from multiple
    n-- // keep subtracting x from the value of multiple until till n times is exhausted or index 0 = x
  }
  
  return z.reverse
}



[2,4,6,8,10]

x = 2; // number to be multiplied
n = 5;  // number of times the number should be multiplied