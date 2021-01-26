function reverseLinkedListII(head, m, n) {
    let pre, current, leftHead
    const dummy = new ListNode()

    dummy.next = head

    // p为游标
    let p = dummy

    // 将p移动到区间的前驱节点
    for(let i=0; i<m-1; i++) {
        p = p.next
    }

    leftHead = p
    
    let start  = leftHead.next
    pre = start
    current = start.next

    // 开始再区间内反转
    for(let i=m; i<n; i++) {
        let next = current.next
        current.next = pre
        pre = current
        current = next
    }

    // leftHead的后继则为反转后的第一个
    leftHead.next = pre
    start.next = current

    return dummy.next
}