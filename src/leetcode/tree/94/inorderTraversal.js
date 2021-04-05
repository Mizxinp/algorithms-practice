/**
 * 递归方式
 * @param {*} root 
 */
var inorderTraversal = function (root) {
    if (!root) return []
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

/**
 * 迭代方式
 * @param {*} root 
 */
var inorderTraversal = function (root) {
    const result = []
    const stack = []
    let cur = root

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        result.push(cur.val)
        cur = cur.right
    }

    return result
};