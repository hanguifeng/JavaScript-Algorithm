let removeDuplicates = function(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[i - count] = nums[i];
    } else {
      count++;
    }
  }
  return nums.length - count;
};

let removeDuplicates = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
