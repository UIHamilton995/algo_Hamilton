function fakeBin(x) {
  let nums = []
  
  for (let i = 0; i < x.length; i++){
    if (x[i] >= 5) {
      nums.push('1')
    } else {num.push('0')}
  }
  return nums.join('')
}


function fakeBin(x) {
  nums = ''

  for (let i = 0; i < x.length; i++){
    if (x[i] >= 5) {
      nums += '1'
    } else {nums += '0'}
  }
  return nums
}