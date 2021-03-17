function detectCycle(head) {
    while(head) {
        if (head.flag) {
            return head
        } else {
            head.flag = true
            head = head.next
        }
    }
    return null
}

var detectCycle = function(head) {
    if (!head) return null
    let pre = head, cur = head
    while (cur && cur.next) {
        pre = pre.next
        cur = cur.next.next
        if (pre === cur) {
            let cur = head
            while (pre !== cur) {
                pre = pre.next
                cur=cur.next
            }
            return pre
        }
    }
    return null
};
