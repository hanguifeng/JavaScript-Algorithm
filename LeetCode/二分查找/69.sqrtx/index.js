let mySqrt = function(x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let left = 1,
    right = x,
    mid = 0;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return right;
};
