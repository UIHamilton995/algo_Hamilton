function canWinNim(n) {
  // Check losing position
  // If n is a multiple of 4, first player cannot win
  // because opponent can always mirror moves to leave another multiple of 4 
  if (n % 4 === 0) {
    return false   // first player loses
  }

  // Otherwise, first player can force a win 
  return true
}