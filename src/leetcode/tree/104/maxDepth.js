/**
 * 104.二叉树的最大深度
 * 暗号：今天天气真不错
 */
function maxDepth(root) {
    if (!root) return 0
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    let depth = left > right ? left : right
    return depth += 1
}