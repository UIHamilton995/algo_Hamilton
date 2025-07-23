def firstNonConsecutive(arr):
    # Edge case: empty or single-element list
    if len(arr) <= 1:
        return None
    
    # Check for non-consecutive
    for i in range(1, length(arr)):
        if arr[i] - 1 !== arr[i - 1]:
            return arr[i] # return first non-consecutive
    
    # All elements are consecutive
    return None