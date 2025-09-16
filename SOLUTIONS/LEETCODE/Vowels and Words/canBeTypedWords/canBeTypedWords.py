def canBeTypedWords(text: str, broken_letters: str) -> int:
  # Step 1: Convert brokenLetters into a set for quick lookup.
  # Why set? Because checking "is this letter broken?" is faster with a set.
  broken_set = set(broken_letters) 
  
  # Step 2: Split the text into words (words are separated by spaces).
  words = text.split()
  
  # Step 3: Initialize a counter for valid words.
  count = 0 
  
  # Step 4: Check each word one by one.
  for word in words:
    # Does this word contain any broken letter?
    if any(char in broken_set for char in word): 
      # if so, skip this word
      continue
    else:
      # if no broken letters, increment the count
      count += 1
      
  # Step 5: Return how many words we can type   
  return count