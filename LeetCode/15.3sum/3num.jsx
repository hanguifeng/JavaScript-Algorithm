const threeSum = nums => {
  const temp = [];
  const length = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < length - 2; ) {
    let left = i + 1;
    let right = length - 1;
    do {
      const result = nums[left] + nums[right] + nums[i];
      if (result === 0) {
        temp.push([nums[left], nums[right], nums[i]]);
      }
      if (result < 0) {
        while (left < right && nums[left] === nums[++left]) {}
      } else {
        while (left < right && nums[right] === nums[--right]) {}
      }
    } while (left < right);
    while (nums[i] === nums[++i]) {}
  }
  return temp;
};
