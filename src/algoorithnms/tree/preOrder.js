/**
 * 先序遍历
 */
function preOrder(root) {
  if (!root) return;

  console.log("val", root.val);
  // 递归左子树
  preOrder(root.left);
  // 递归右指数
  preOrder(root.right);
}
