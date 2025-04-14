function arrayManipulation(n, queries) {
  // step 1: initialize an array of size n+1 with all zeros
  let arr = new Array(n + 1).fill(0)

  // step 2: process each query
  for (let i = 0; i < queries.length; i++) {
    let [a, b, k] = queries[i]

    // add k to a-1 index(convert 1-based index to 0-based)
    arr[a - 1] += k
    // subtract k from the index after b
    if (b < n) {
      arr[b] -= k
    }
  }

  // step 3: find the maximum value using prefix sum
  let max = 0
  let current = 0

  for (let i = 0; i < n; i++){
    current += arr[i]

    if (current > max) {
      max = current
    }
  }
  return max
}




/*Real-Life Analogy:
Imagine you have a long table (representing an array) with n empty slots, each labeled with a number (1 to n). You also have a bunch of friends (representing the operations), and each one will come over and pour a certain amount of water between two specific slots on the table. After all your friends have poured their water, you need to check which slot on the table has the most water.

Inputs:
n: The number of empty slots (the size of the array).
operations: A series of instructions, where each friend gives you three numbers:
a (starting slot),
b (ending slot),
k (amount of water they pour into those slots).
Challenge:
For each operation, instead of going slot by slot and pouring water in every slot between a and b, we want to figure out a faster way to update the array and find the maximum water level (value in the array) efficiently.

The Key Insight:
The trick is to avoid directly updating every slot between a and b for each operation. Instead, we can:

Add k to the starting position a, meaning “start pouring water here.”
Subtract k from the position right after b (position b+1), meaning “stop adding water after this point.”
This is a range update technique that allows us to track where the increases and decreases happen.

How it Works:
Starting the pour: At the start position a, we add k to mark the beginning of water being poured into the slots.
Ending the pour: Right after the end position b, we subtract k to signify that the pouring stops after the b-th slot.
After all operations, we process the array to calculate the cumulative effect of all the pouring actions. This gives us the final amount of water in each slot, and from there, we can find the maximum amount.

Step-by-Step Explanation:
Initialize an empty array: Start with an array of size n, filled with zeros.

Example: If n = 5, start with [0, 0, 0, 0, 0].

Apply operations: For each operation (a, b, k):

Add k at position a - 1 (because the array is 0-indexed).
Subtract k at position b (this stops the effect of k after position b).
After applying all operations, the array will store the cumulative change at each position, but not the final values yet.

Calculate the final array: To get the actual values in the array after all operations, we calculate the prefix sum (cumulative sum) from left to right.

Find the maximum value: Once we have the final array, the highest number in that array represents the slot with the most water (or the element with the maximum value).*/