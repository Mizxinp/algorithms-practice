
function hasCycle(head) {
    while (head) {
        if (head.flag) {
            return true
        } else {
            head.flag = true
            head = head.next
        }
    }
    return false
}

// 快慢指针
var hasCycle = function (head) {
    if (!head) return false
    let pre = head, cur = head
    while (cur && cur.next) {
        pre = pre.next
        cur = cur.next.next
        if (pre === cur) {
            return true
        }
    }
    return false
}
