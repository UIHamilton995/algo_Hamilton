function removeSmallest(numbers){
    // make a copy of the numbers array to avoid mutating it as instructed
    let numCopy = [...numbers]

    // find the position/index of the smallest rating in the array
    let minIndex = numCopy.indexOf(Math.min(...numCopy))

    // splice out that particular rating alone
    numCopy.splice(minIndex, 1) 

    return numCopy
}