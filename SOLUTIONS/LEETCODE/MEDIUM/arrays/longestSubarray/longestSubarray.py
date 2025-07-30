def longestSubarray(nums):
    maxi = max(nums)
    counter = 0
    longest = 0

    for i in range(len(nums)):
        if nums[i] == maxi:
            counter += 1
            if counter > longest:
                longest = counter
        else:
            counter = 0
    
    return longest

# The syntax, methods and thought process used above is the same with the JavaScript version of the solution