def sortVowels (s: str) -> str:
  # Step 1: Define the set of vowels (both lowercase and uppercase)
  vowels = set("aeiouAEIOU")
  
  # Step 2: Extract all vowels from the string 's' 
  # Example: if s = "leetcode", vowels_list = ['e', 'e', 'o', 'e'] 
  vowels_list = [char for char in s if char in vowels]
  
  # Step 3: Sort the extracted vowels alphabetically 
  # Example: ['e', 'e', 'o', 'e'] -> ['e', 'e', 'e', 'o']
  vowels_list.sort()
  
  # Step 4: Create an index pointer for the sorted vowels
  # This will let us "pick the next vowel in order" when rebuilding the string 
  vowel_index = 0
  
  # Step 5: Reconstruct the new string
  result = [] # This is where we'll build the final string
  
  for char in s:
    if char in vowels:
      # If the character is a vowel, replace it with the next sorted vowel
      result.append(vowels_list[vowel_index])
      
      # Move to the next vowel in the sorted list
      vowel_index += 1
    
    else:
      # If it's not a vowel, keep it as-is
      result.append(char)
  
  # Step 6: Join the list back into a string and return it
  return "".join(result)