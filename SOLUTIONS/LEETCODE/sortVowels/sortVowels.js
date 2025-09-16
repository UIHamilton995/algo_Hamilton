function sortVowels(s) {
  // Step 1: Define the set of vowels (both lowercase and uppercase) for tracking the alphabets.
  // We'll use a string instead of a Set here for simplicity.
  const vowels = "aeiouAEIOU";

  // Step 2: Extract all vowels from 's' into an array.
  // Example: "leetcode" -> ['e', 'e', 'o', 'e']
  let vowelsList = [];
  for (let char of s) {
    if (vowels.includes(ch)) {
      vowelsList.push(ch);
    }
  }

  // Step 3: Sort the vowels alphabetically.
  // Note: In JS, sort() works on strings by ASCII values by default.
  vowelsList.sort();

  // Step 4: Create a pointer/index for tracking the position of our sorted vowels array.
  let vowelIndex = 0;

  // Step 5: Rebuild the string.
  // We'll use an array first (more efficient), then join it.
  let result = [];

  for (let char of s) {
    if (vowels.includes(char)) {
      // If it's a vowel, replace with the next sorted vowel.
      result.push(vowelsList[vowelIndex]);
      vowelIndex++; // Move pointer to next vowel
    } else {
      // If it's not a vowel, just keep it unchanged.
      result.push(char);
    }
  }

  // Step 6: Convert array back into string.
  return result.join("");
}
