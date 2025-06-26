def getIntersectionNode (headA, headB):
  if not headA or not headB : return None
  
  pointerA = headA
  pointerB = headB
  
  while pointerA is not pointerB:
    pointerA = pointerA.next if pointerA else headB
    pointerB = pointerB.next if pointerB else headA
    
  return pointerA


    