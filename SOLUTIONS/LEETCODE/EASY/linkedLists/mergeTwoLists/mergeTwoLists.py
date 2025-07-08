def mergeTwoLists(list1, list2) :
    # declare the dummy variable that tracks and takes note of other nodes
    dummy = ListNode(0)
    current = dummy
    
    # Traverse the two lists, picking simultaneously the smallest value from each list
    while list1 is not None and list2 is not None:
        if list1.val <= list2.val: 
            current.next = list1
            list1 = list1.next
        else:
            current.next = list2
            list2 = list2.next
            
        current = current.next
        
    # exhaust the list1 and then merge the lists
    if list1 is not None:
        current.next = list1
    elif list2 is not None:
        current.next = list2
        
    return dummy.next
