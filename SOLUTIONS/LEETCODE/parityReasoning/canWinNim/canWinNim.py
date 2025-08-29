def canWinNim(self, n: int) -> bool:
  # if n is divisible by 4, the first player cannot win
  if n % 4 == 0:
    return False 
  # otherwise the first player can always win
  return True 