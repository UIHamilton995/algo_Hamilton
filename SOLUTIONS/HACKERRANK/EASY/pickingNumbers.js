function pickingNumbers(a) {
  
  // Create an object to store the frequency of each number 
  const frequency = {}

  // Count the occurrences of each number in the array
  for (num of a) {
    frequency[num] = (frequency[num] || 0) + 1
  }

  let maxCount = 0

  // Check pairs of neighboring numbers
  for (let num in frequency) {
    // Convert key to number since keys are strings in the frequency object
    num = parseInt(num)
    let currentCount = frequency[num]

    // Check with neighbor(num + 1) if it exists
    if (frequency[num + 1]){
      currentCount += frequency[num + 1]
    }

    // Update maxCount if the current pair is larger
    maxCount = Math.max(maxCount, currentCount)
  }

  return maxCount
}