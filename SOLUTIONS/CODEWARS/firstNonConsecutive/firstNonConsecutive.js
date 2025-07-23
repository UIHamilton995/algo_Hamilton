function firstNonConsecutive(arr){
    // return null for an array with zero or 1 element
    if (arr.length <= 1)return null

    // loop through the array from the second index
    for(let i = 1; i < arr.length; i++){
        // if the current iterable - 1 is not equal to previous iterable, return the current iterable
        if(arr[i] - 1 !== arr[i - 1]){
            return arr[i]
        }
    }

    // they must be a list of consecutive numbers
    return null
}