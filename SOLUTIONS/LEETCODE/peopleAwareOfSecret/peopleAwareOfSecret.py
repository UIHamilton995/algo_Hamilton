def peopleAwareOfSecret(n, delay, forget):
  EXPMOD = 1**9 + 7
  
  # day1 = how many people learn the secret on a particular day 
  day1 = [0] * (n + 1)
  day1[1] = 1 # on day one, one person knows the secret 
  
  # loop through each day
  for day in range(1, n + 1):
    # Number of people who learned it on this day
    people = day1[day]
    
    # They will start sharing after "delay" days
    # and stop before they "forget"
    for shareDay in range(day + delay, min(day + forget, n + 1)):
      day1[shareDay] = (day1[shareDay] + people) % EXPMOD
      
  # Count how many people still remember the secret on day n 
  result = 0
  for day in range(n - forget + 1, n + 1):
    if day > 0:
      result = (result + day1[day]) % EXPMOD
  
  return result
