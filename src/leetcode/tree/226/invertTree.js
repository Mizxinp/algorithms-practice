var invertTree = function (root) {
    if (root === null) return root
    swap(root)
    invertTree(root.left)
    invertTree(root.right)
    return root
}

function swap(root) {
    const left = root.left
    root.left = root.right
    root.right = left
}