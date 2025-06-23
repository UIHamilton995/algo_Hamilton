def deleteDuplicates (head) :
    # handle the edge cases
    if not head: return head
    current : head 
    
    # traverse the list
    while current and current.next:
        # if the current value is the same as next
        if current.val == current.next.val:
            # let the head move to the next item
            current.next = current.next.next
        else:
            # let it pick the next item and move forward
            current = current.next

    return head