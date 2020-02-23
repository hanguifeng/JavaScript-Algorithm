/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
let postorder = function(root) {
  if (!root) {
    return [];
  }
  const res = [];

  let recusion = root => {
    if (!root) return;
    root.children.forEach(leaf => {
      recusion(leaf);
    });
    // 这个逻辑执行语句的位置很重要
    res.push(root.val);
  };

  recusion(root);
  return res;
};
