
function mergeTwoLists(l1, l2)  {
    const head = new LinkedListNode()

    let current = head

    while (l1 && l2) {
        if (l1.value <= l2.value) {
            current.next = l1
            l1 = l1.next
        } else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }

    current.next = l1 !== null ? l1 : l2
    return head.next
}
