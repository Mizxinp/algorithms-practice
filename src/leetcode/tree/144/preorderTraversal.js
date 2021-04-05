var preorderTraversal = function (root) {
    if (!root) return []
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)]
};

//
var preorderTraversal = function (root) {
    return preOrder(root, [])
};

function preOrder(root, result) {
    if (!root) return []
    result.push(root.val)
    preOrder(root.left, result)
    preOrder(root.right, result)
    return result
}

/**
 * 迭代方式
 */

var preorderTraversal = function (root) {
    if (!root) return []
    const result = []
    const stack = []
    stack.push(root)
    while (stack.length) {
        const cur = stack.pop()

        result.push(cur.val)

        if (cur.right) {
            stack.push(cur.right)
        }

        if (cur.left) {
            stack.push(cur.left)
        }
    }

    return result
}