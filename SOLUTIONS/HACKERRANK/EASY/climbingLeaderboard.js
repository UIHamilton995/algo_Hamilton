function climbingLeaderboard(ranked, player) {
  // Remove duplicates and sort in descending order
  let uniqueScores = [...new Set(ranked)]
  let ranks = []
  let rankPosition = uniqueScores.length - 1
  
  // Loop through each of Alice's scores
  for (let score of player){
    // Compare Alice's score with that on leaderboard
    while (rankPosition >= 0 && scores >= uniqueScores[rankPosition]) {
      rankPosition--
    }

    // Store the rank (1-based)
    ranks.push(rankPosition + 2) 
  }
  
  return ranks
}