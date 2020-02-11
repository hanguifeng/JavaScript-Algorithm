// 暴力法
let largestRectangleArea = function(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let minHeight = heights[i];
    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);
      maxArea = Math.max(maxArea, (j - i + 1) * minHeight);
    }
  }
  return maxArea;
};

// 利用栈
var largestRectangleArea = function(heights) {
  var maxarea = 0;
  var stack = [-1];
  for (var i = 0; i < heights.length; i++) {
    while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i]) {
      maxarea = Math.max(
        maxarea,
        heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
      );
    }
    stack.push(i);
  }
  while (stack.length > 1) {
    maxarea = Math.max(
      maxarea,
      heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1)
    );
  }
  return maxarea;
};
