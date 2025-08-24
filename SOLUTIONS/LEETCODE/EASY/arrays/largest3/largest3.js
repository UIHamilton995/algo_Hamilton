function largestGoodInteger(nums){
  // Step 1: Create an empty array to store all triples (e.g., '777', '000')
  const matches = []

  // Step 2: Loop through the string up to the third-to-last character
  for (let i = 0; i < nums.length - 2; i++) {
    // Step 3: Check if the current digit is the same as the next two digits
    if (nums[i] === nums[i + 1] && nums[i] === nums[i + 2]) {
      // Step 4: If true, save this triple (like '777') into our matches array
      matches.push(nums[i].repeat(3))
    }
  }

  // Step 5: If no triples were found, return an empty string as per the problem requirement
  if(matches.length === 0) return ''

  // Step 6: Convert all triple strings into numbers for correct numeric comparison
  let maxNum = Math.max(...matches.map(str => Number(str)))

  // Step 7: Convert the largest number back to a string for final output
  // Why padStart(3, '0')?  
  // padStart ensures that if the number is '0', it becomes '000' instead of '0'.  
  // Example: String(0) = '0' → padStart(3, '0') = '000'
  return String(maxNum.padStart(3, '0'))
}