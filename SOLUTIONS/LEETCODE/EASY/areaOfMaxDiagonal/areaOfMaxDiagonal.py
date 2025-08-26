def areaOfMaxDiagonal(dimensions):
  diagonals = []
  
  for i in range(len(dimensions)):
    diagVal = math.sqrt((dimensions[i][0] ** 2) + (dimensions[i][1] ** 2))
    area = dimensions[i][0] * dimensions[i][1]
    diagonals.append({'diag': diagVal, 'area': area})
    
    # max diagonal
    maxDiag = max([obj['diag'] for obj in diagonals])
    # max area
    maxArea = max([obj['area'] for obj in diagonals if obj['diag'] == maxDiag])
    
    return maxArea