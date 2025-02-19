function designerPDFViewer(h, word) {
  // Initialize an empty height which 
  let maxHeight = 0;

  // Loop through to determine the properties of main characters; 
  for (let i = 0; i < word.length; i++){
    // Get index of letters
    let letterIndex = word.charAt(i) - 'a'.word.charAt(0)
    // Get height of particular letters
    let letterHeight = heights[letterIndex]
    // Check for the letter with highest height
    maxHeight = Math.max(maxHeight, letterHeight)
  }
  let width = word.length
  let area = maxHeight * width
  return area
}