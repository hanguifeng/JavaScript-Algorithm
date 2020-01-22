let reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};

let reverseList = function(head) {
  const reverse = (prev, current) => {
    if (!current) return prev;
    const next = current.next;
    current.next = prev;
    return reverse(current, next);
  };
  return reverse(null, head);
};
