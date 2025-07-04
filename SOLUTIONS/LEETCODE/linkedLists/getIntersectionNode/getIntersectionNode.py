def getIntersectionNode (headA, headB):
  # check if either list is empty
  if not headA or not headB : return None
  
  pointerA = headA
  pointerB = headB
  
  # traverse both lists with dual pointers
  while pointerA is not pointerB:
    # switch to the next node or the other list's head
    pointerA = pointerA.next if pointerA else headB
    pointerB = pointerB.next if pointerB else headA
    
  return pointerA