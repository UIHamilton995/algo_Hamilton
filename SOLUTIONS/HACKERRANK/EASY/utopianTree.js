// the cycle of the tree a's growth is that in spring, it turns 2height + 1
// so for n number of years, it grows; n(2h+1)

function utopianTree(n) {
  let height = 1 //as starting height
  
  // Loop through n to determine height of cycles
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      height *= 2
    } else {
      height += 1
    }
  }
  return height
}