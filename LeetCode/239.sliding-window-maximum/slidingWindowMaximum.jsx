// 暴力法
let maxSlidingWindow = function(nums, k) {
  const maxNums = [];
  if (!nums.length) {
    return [];
  }
  for (let i = 0; i < nums.length - k + 1; i++) {
    let maxNum = nums[i];
    for (let j = 0; j < k; j++) {
      maxNum = Math.max(nums[i + j], maxNum);
    }
    maxNums.push(maxNum);
  }
  return maxNums;
};

// 双端队列
let maxSlidingWindow = function(nums, k) {
  const maxNums = [];
  const deque = [];
  const dequePush = index => {
    if (index - deque[0] > k - 1) {
      console.log(index, deque);
      deque.shift();
    }
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[index]) {
      deque.pop();
    }
    deque.push(index);
  };
  for (let i = 0; i < nums.length; i++) {
    dequePush(i);
    if (i >= k - 1) {
      maxNums.push(nums[deque[0]]);
    }
  }
  return maxNums;
};
