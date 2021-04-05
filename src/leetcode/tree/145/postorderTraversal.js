/**
 * 递归方式
 * @param {*} root 
 */
var postorderTraversal = function (root) {
    if (!root) return []
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val]
}

var postorderTraversal = function (root) {
    if (!root) return []
    const result = []
    const stack = [root]

    while (stack.length) {
        const cur = stack.pop()

        result.unshift(cur.val)

        if (cur.left) {
            stack.push(cur.left)
        }

        if (cur.right) [
            stack.push(cur.right)
        ]

    }

    return result
}