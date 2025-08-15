def generate(numRows):
  # create an empty array to hold all the rows
  result = []

  # loop through numRows from first to last element
  for i in range(numRows):
    # start each row with 1
    row = [1]

    # get the previous row if this is not the first row 
    prev_row = result[i - 1] if i > 0 else None

    # add middle elements using values from previous row
    for j in range(1, i):
      value = prev_row[j -1] + prev_row[j]
      row.append(value)

    # if there's data in the row, add 1 to the end of it
    if i > 0:
      row.append(1)
    
    # append the completed row to result
    result.append(row)
  
  # return the completed triangle
  return result