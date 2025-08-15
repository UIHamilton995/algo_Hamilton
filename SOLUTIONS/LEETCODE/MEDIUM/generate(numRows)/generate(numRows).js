function generate(numRows) {
  // create an empty array to hold all the rows of pascal's triangle
  const result = []

  // loop through each row index from 0 to numRows - 1
  for (let i = 0; i < numRows; i++){
    // start each row with a single 1
    const row = [i]

    // get the previous row from the result array (if i > 0) 
    const prevRow = result[i - 1];

    // fill in the middle elements of the current row (if any)
    // we start from second index to the last 
    for (let j = 1; j < i; j++){
      // add the two numbers diagonally above the current 
      // from the previous row: prevRow[j - 1] and prevRow[j]
      const sum = prevRow[j - 1] + prevRow[j]

      // push the sum to the current row
      row.push(sum)
    }

    // if the row has more than one element, we end it with another 1
    // first and last elements of pascal's triangle are always 1
    if (i > 0) row.push(1)
    
    // push the completed row to the results array
    result.push(row)
  }

  // return the completed triangle with all rows
  return result;
}