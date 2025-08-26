function areaOfMaxDiagonal(dimensions) {
  const diagonals = [];

  for (let i = 0; i < dimensions.length; i++) {
    const diagVal = Math.sqrt((dimensions[i][0] ** 2) + (dimensions[i][1] ** 2));
    const area = dimensions[i][0] * dimensions[i][1];
    diagonals.push({ diag: diagVal, area: area });
  }

  // step 1: find the largest diagonal
  const maxDiag = Math.max(...diagonals.map(obj => obj.diag));

  // step 2: among rectangles with maxDiag, choose the one with largest area
  const maxArea = Math.max(...diagonals.filter(obj => obj.diag === maxDiag).map(obj => obj.area));

  return maxArea;
};