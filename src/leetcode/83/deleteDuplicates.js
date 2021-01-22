function deleteDuplicates(head) {
    let current = head

    while (current !== null && current.next !==null) {
        if (current.value === current.next.value) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head
}