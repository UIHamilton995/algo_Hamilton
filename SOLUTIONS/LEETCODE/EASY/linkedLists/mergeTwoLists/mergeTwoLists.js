function mergeTwoLists(list1, list2) {
    // declare the dummy variable that tracks and takes note of other nodes
    const dummy = new ListNodes(0)
    let current =  dummy

    // traverse the two lists, picking from the simultaneously the smallest value from each list 
    while (list1 !== null && list2 !== null) {
        if(list1.val <= list2.val){
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    // if list1 is not empty, we keep at it until empty, then we move to list2
    if(list1 !== null) {
        current.next = list1
    } else if (list2 !== null){
        current.next = list2
    }

    return dummy.next
}