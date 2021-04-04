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