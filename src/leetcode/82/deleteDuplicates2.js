function deleteDuplicates(head) {
    if (!head || !head.next) {
        return head
    }
    let dummy = new ListNode()
    dummy.next = head

    let current = dummy

    while(current.next && current.next.next) {
        // 对current后面两个节点比较
        if (current.next.value === current.next.next.value) {
            let val = current.next.value
            // 反复排查后面的元素是否存在多次重复该值的情况
            while(current.next && current.next.val === val) {
                // 重复则删除
                current.next = current.next.next
            }
        } else {
            // 不重复，则继续
            current = current.next
        }
    }
}