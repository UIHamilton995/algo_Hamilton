function longestSubarray(nums){
    // get the maximum number from the subarray
    const maxi = Math.max(...nums)
    // initialise a counter to check repetitions of maxi
    let counter = 0
    // initialise longest to store the most repetition of maxi as you run through the list
    let longest = 0

    // loop through the nums array
    for(let i = 0; i < nums.length; i++){
        // if iterable is same as highest number
        if(nums[i] === maxi){
            // increment count
            counter++
            // if the current iterable stored in count is has more repetitions than longest
            if(counter > longest){
                // counter becomes the new longest
                longest = counter
            }
        // no need to store the number
        } else {counter = 0}
    }
    // return the max integer in the subarray with the longest repetition of itself
    return longest
}