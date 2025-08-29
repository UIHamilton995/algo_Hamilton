def flowerGame (n, m):
  odd_n = n // 2 + (n % 2)
  even_n = n // 2
  
  odd_m = m // 2 + (m % 2)
  even_m = m // 2
  
  return (odd_m * even_n) + (odd_n * even_m)
  