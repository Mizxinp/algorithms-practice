function postorder(root) {
  if (!root) return null;

  postorder(root.left);
  postorder(root.right);
  console.log("val", root.val);
}
