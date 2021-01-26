function reverseLinkedList(head) {
    let pre = null
    let current = head

    while (current !== null) {
        // 记录next节点
        let next = current.next
        // 反转指针
        current.next = pre
        // pre 往前
        pre = current
        // cur 往前
        current = next
    }

    return pre
}