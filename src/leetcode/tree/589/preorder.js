var preorder = function (root) {
    return preOrder(root)
};

function preOrder(root, result = []) {
    if (!root) return []
    result.push(root.val)
    root.children && root.children.forEach(item => preOrder(item, result))
    return result
}

