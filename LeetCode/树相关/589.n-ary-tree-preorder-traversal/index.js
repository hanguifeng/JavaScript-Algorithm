/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

let preorder = function(root) {
  if (!root) return [];

  const res = [];
  const recusion = root => {
    if (!root) return;

    res.push(root.val);
    root.children.forEach(n => {
      recusion(n);
    });
  };

  recusion(root);
  return res;
};
