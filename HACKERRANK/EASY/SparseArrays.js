function matchingStrings(stringList, queries){
  let result = [] // initialize a result array
  let frequencyMap = {} // initialize a hashmap for string frequencies

  // first pass is to populate the frequency map with str counts
  for (let i = 0; i < stringList.length; i++){
    let str = stringList[i]
    if (frequencyMap[str]) {
      frequencyMap[str]++ // increment the count for the stringList item
    } else {
      frequencyMap[str] = 1 // initialize first count for a new item
    }
  }

  // second pass: for each query, check the frequencyMap 
  for (let i = 0; i < queries.length; i++){
    let query = queries[i]
    if (frequencyMap[query]) {
      result.push(frequencyMap[query]) // append the query count to the result array
    } else {
      result.push(0) // enter the result as 0
    }
  }
  return result
}

// The hashmap is more scalable and saves you the stress of looping through the array for every item or element of the array that you want to count.