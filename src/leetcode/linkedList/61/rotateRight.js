/**
 * 思路：找到最后一个节点，将链表变成有环，然后往前走k位，最后断开链表
 * @param {*} head 
 * @param {*} k 
 */
var rotateRight = function (head, k) {
    if (!head) return head
    let [cur, count] = [head, 1]
    while (cur.next) {
        cur = cur.next
        count += 1
    }
    // 将链表编程环
    cur.next = head
    // 往前走k位
    for (let i = 0; i < count - k % count - 1; i++) {
        head = head.next
    }
    cur = head.next
    // 断开链表
    head.next = null
    return cur
}