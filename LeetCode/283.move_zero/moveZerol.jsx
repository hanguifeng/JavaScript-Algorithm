const moveZeroes = function(nums) {
  let continuousZeroLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (nums[i + 1] && nums[i + 1] !== 0) {
        if (continuousZeroLength === 0) {
          [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        } else {
          [nums[i - continuousZeroLength], nums[i + 1]] = [
            nums[i + 1],
            nums[i - continuousZeroLength]
          ];
        }
      } else {
        continuousZeroLength += 1;
      }
    }
  }
  return nums;
};

const moveZeroes = function(nums) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }
};
