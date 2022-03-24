function deleteDuplicates(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

var deleteDuplicates = function (head) {
  if (!head) return null;
  let [pre, cur] = [head, head.next];
  while (cur) {
    if (pre.val === cur.val) {
      cur = cur.next;
    } else {
      pre.next = cur;
      pre = cur;
      cur = cur.next;
    }
  }
  pre.next = null;
  return head;
};
