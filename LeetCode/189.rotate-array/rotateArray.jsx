let rotate = function(nums, k) {
  const items = [];
  for (i = 0; i < nums.length; i++) {
    items[(i + k) % nums.length] = nums[i];
  }
  return items;
};

let rotate = function(nums, k) {
  let n = nums.length;
  // 原数组操作
  nums.splice(0, 0, ...nums.splice(n - (k % n)));
};

let rotate = function(nums, k) {
  const n = nums.length;
  k %= n;
  if (n == 1) {
    return;
  }
  let tmp = 0;
  const myReverse = (start, end) => {
    while (start < end) {
      tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;
      start++;
      end--;
    }
  };
  myReverse(0, n - 1);
  myReverse(0, k - 1);
  myReverse(k, n - 1);
};
