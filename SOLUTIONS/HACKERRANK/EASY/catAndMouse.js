function catAndMouse(x, y, z) {

  // Calculate the distances from each cat to the mouse
  let numA = Math.abs(x - z)
  let numB = Math.abs(y - z)

  // Check and return the smallest distance as the cat who gets the mouse
  if (numA < numB) {
    return "Cat A"
  } else if (numA > numB) {
    return "Cat B"
  }

  // Else they get to the mouse same time and begin to fight, giving the mouse a chance to flee
  return "Mouse C"

  // Alternative conditional rendering
  return numA < numB ? "Cat A": numA > numB ? "Cat B": "Mouse C1"
}