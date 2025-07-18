function getIntersectionNode (headA, headB) {
  if (!headA || !headB) {return null} 

  //
  let pointerA = headA
  let pointerB = headB

  //
  while (pointerA !== pointerB) {
    // when pointerA reaches to the end of listA, let it redirect to headB
    pointerA = pointerA ? pointerA.next : headB
    // when pointerB reaches to the end of listB, let it redirect to headA
    pointerB = pointerB ? pointerB.next : headA
  }
  return pointerA
}