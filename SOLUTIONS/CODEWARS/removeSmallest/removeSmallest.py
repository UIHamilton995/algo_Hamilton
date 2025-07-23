def removeSmallest(numbers):
    # make a copy of the numbers array to avoid mutating it as instructed
    num_copy = numbers.copy()

    # find the position/index of the smallest rating in the array
    minIndex = num_copy.index(min(num_copy))

    # pop out that particular rating alone
    num_copy.pop(minIndex(num_copy))

    return num_copy