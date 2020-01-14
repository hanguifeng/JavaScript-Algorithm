const twoSum = function(nums, target) {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (temp[diff] !== undefined) {
      return [i, temp[diff]];
    }
    temp[nums[i]] = i;
  }
};
