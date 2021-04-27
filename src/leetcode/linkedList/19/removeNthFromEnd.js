function removeNthFromEnd(head, n) {

    if (!head) return null

    let dummy = new ListNode(null, head)
    let [slowPoint, fasterPoint] = [dummy, dummy]

    while (n !== 0) {
        fasterPoint = fasterPoint.next
        n--
    }

    while (fasterPoint.next) {
        slowPoint = slowPoint.next
        fasterPoint = fasterPoint.next
    }
    slowPoint.next = slowPoint.next.next
    return dummy.next
}
