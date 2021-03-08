function deleteDuplicates(head) {
    if (!head || !head.next) return head

    let dummy = new ListNode(null, head)
    let [pre, cur] = [dummy, head]

    while (cur && cur.next) {
        // 如果不相等，pre和cur各像后走一步，重新比较
        if (pre.next.val !== cur.next.val) {
            // pre = pre.next
            // cur = cur.next
            [pre, cur] = [pre.next, cur.next]
        } else {
            // 相等的话循环让cur走一步，直到不等为止
            while (cur && cur.next && cur.next.val === pre.next.val) {
                cur = cur.next
            }

            [pre.next, cur] = [cur.next, cur.next]
            // pre.next = cur.next
            // cur = cur.next
        }
    }
    return dummy.next
}