// 第一种
const maxArea = function(height) {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = Math.min(height[i], height[j]) * (j - i);
      if (area > max) {
        max = area;
      }
    }
  }
  return max;
};

// 第二种
const maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j; ) {
    const minHeight = height[i] > height[j] ? height[j--] : height[i++];
    const area = (j - i + 1) * minHeight;
    if (area > max) {
      max = area;
    }
  }
  return max;
};
