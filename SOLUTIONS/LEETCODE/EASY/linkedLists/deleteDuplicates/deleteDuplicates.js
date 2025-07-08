function deleteDuplicates (head) {
    // handle edge cases; empty the list
    if(!head){return head}
    let current =  head 

    // traverse the list
    while(current && current.next){
        // if the current value is the same as the next
        if(current.val === current.next.val){
        // let the head move to the next item
            current.next = current.next.next
        } else {
        // let it pick the next item and move forward
            current = current.next 
        }
    }
    return head 
}