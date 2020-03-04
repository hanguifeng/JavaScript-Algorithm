let isPerfectSquare = function(num) {
  if (num === 0 || num === 1) {
    return true;
  }
  let left = 1,
    right = num - 1,
    mid = 0;
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }
  return false;
};
