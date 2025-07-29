function smallestSubarrays(nums){
    const n = nums.length
    const  answer = new Array(n).fill(1) // default to size 1
    const bitLastSeen = new Array(32).fill(-1) // tracks where each bit was last seen

    // Loop from right to left
    for(let i = n - 1; i >= 0; i--){
        let numVal = nums[i]

        // For every bit in 0 - 31 (32 bit numbers)
        for(let bit = 0; bit < 32; bit++){
            // check if current has this bit set 
            if ((numVal & (1 << bit)) !== 0){
                // update last seen position of this bit
                bitLastSeen[bit] = i
            }
        }

        // from current position, what is the farthest we need to go to include all the bits seen so far?
        let farthest = i
        for(let bit = 0; bit < 32; bit++){
            if(bitLastSeen[bit] !== -1){
                farthest = Math.max(farthest, bitLastSeen[bit])
            }
        }
        
        // Store the length of the subarray (from i to farthest)
        answer[i] = farthest - i + 1
    }
    return answer
}
