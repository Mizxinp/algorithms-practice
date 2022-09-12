function inorder(root) {
  if (!root) return null;

  inorder(root.left);
  console.log("val", root.val);
  inorder(root.right);
}
