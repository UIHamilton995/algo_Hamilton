function peopleAwareOfSecret(n, delay, forget) {
  const EXPMOD = 1e9 + 7

  // how many people learned the secret from a particular day; 
  const day1 = new Array(n+1).fill(0)

  day1[1] = 1 // on day one, one person knows the secret

  // loop through each day
  for (let day = 1; day <= n; day++){
    // Number of people who learned it on this day
    let people = day1[day]
    
    // They will start sharing after "delay" days,
    // and continue sharing until the day before they forget.
    for(let shareDay = day + delay; shareDay < day + forget && shareDay <= n; shareDay++){
        day1[shareDay] = (day1[shareDay] + people) % EXPMOD
    }
  }

  // Count how many people still remember the secret on day n
  let result = 0;
  for(let day = n - forget + 1; day <= n; day++){
      if(day > 0){
          result = (result + day1[day]) % EXPMOD
      }
  }
  return result
}