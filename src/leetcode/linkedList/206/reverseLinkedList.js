var reverseList = function (head) {
    if (!head) return null
    let pre = null
    let current = head

    while (current !== null) {
        // // 记录next节点
        // let next = current.next
        // // 反转指针
        // current.next = pre
        // // pre 往前
        // pre = current
        // // cur 往前
        // current = next

        [current.next, pre, current] = [pre, current, current.next]
    }

    return pre
}

//  递归方式
function reverseList(head) {
    if (head === null || head.next === null) return head
    // tail 反转以后的尾节点
    let tail = head.next
    // p:反转以后的头节点地址
    let p = reverseList(head.next)
    head.next = tail.next
    tail.next = head
    return p
}


// 扩展：反转头n个节点
function reverse(head, n) {
    if (n === 1) return head
    let tail = head.next, p = reverse(head.next, n - 1)
    head.next = tail.next
    tail.next = head
    return p
}