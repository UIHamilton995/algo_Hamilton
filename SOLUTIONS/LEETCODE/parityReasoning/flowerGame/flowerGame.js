function flowerGame(n, m) {
  // -----------------------------
  // Step 1: Count odd numbers in Alice's row (1..n)
  // -----------------------------
  // n % 2 gives the remainder when n is divided by 2
  // - If n is odd (e.g., 5 % 2 === 1), there is an extra odd number
  // - If n is even (e.g., 4 % 2 === 0), the number of odd numbers is exactly Math.floor(n / 2)
  // So adding (n % 2) accounts for that extra odd number if n is odd
  let oddN = Math.floor(n / 2) + (n % 2)

  // Step 2: Count even numbers in Alice's row (1..n)
  // Total numbers minus odd numbers gives the number of even numbers
  let evenN = Math.floor(n / 2)

  // Step 3: Count odd numbers in Bob's row (1..m)
  let oddM = Math.floor(m / 2) + (m % 2)

  // Step 4: Count even numbers in Bob's row (1..m)
  let evenM = Math.floor(m / 2)

  // Step 5: Calculate winning pairs
  // Alice wins only if the sum of two flowers is odd.
  // There are two ways to get an odd sum:
  // 1) Alice picks an odd flower, Bob picks an even flower -> oddN * evenM
  // 2) Alice picks an even flower, Bob picks an odd flower -> evenN * oddM
  // Add these two possibilities together to get total winning pairs
  return (oddN * evenM) + (evenN * oddM)
}


                                  // OR


function flowerGame(n, m) {
  // -----------------------------
  // Step 1: Observation
  // -----------------------------
  // The game counts how many ways Alice can pick a flower from n flowers
  // and Bob can pick a flower from m flowers so that the sum is odd.
  // 
  // Key parity insight:
  // - Odd + Even = Odd ✅
  // - Even + Odd = Odd ✅
  // - Odd + Odd = Even ❌
  // - Even + Even = Even ❌
  //
  // Therefore, exactly **half of all possible pairs** produce an odd sum,
  // except when both n and m are odd (then one extra pair must be considered).

  // -----------------------------
  // Step 2: Total pairs
  // -----------------------------
  // Total ways to pick a pair = n * m
  // Example: n = 3, m = 4 → 3 * 4 = 12 total pairs

  // -----------------------------
  // Step 3: Half of the pairs are valid
  // -----------------------------
  // Because sums alternate between odd and even in a checkerboard pattern:
  // | A\B | 1 | 2 | 3 | 4 |
  // |-----|---|---|---|---|
  // | 1   | 2 | 3 | 4 | 5 |
  // | 2   | 3 | 4 | 5 | 6 |
  // | 3   | 4 | 5 | 6 | 7 |
  //
  // Odd + Even and Even + Odd are evenly distributed, so half of n*m
  // gives the number of winning pairs.
  //
  // Math.floor ensures that if both n and m are odd, we ignore the fractional part,
  // which aligns with integer counts of pairs (we cannot have half a pair).

  // -----------------------------
  // Step 4: Return the result
  // -----------------------------
  return Math.floor((m * n) / 2); // elegant O(1) solution
};