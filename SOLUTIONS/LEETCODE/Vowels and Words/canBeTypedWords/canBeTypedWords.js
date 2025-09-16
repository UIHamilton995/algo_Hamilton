function canBeTypedWords(text, brokenLetters) {
  // Step 1: Put broken letters into a Set for quick lookup
  const brokenSet = new Set(brokenLetters)

  // Step 2: Split text into words (by space)
  const words = text.split(" ")

  // Step 3: Initialize counter
  let count = 0 

  // Step 4: Check each word
  for (let word of words) {
    // Assume the word is valid unless we find a broken letter
    let isValid = true 

    for (let char of words) {
      if (brokenSet.has(char)) {
        // Found a broken letter → word invalid
        isValid = false
        break; // stop checking this word
      }
    }

    if(isValid) count++
  }

  // Step 5: Return the result
  return count
}