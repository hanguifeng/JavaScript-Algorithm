const climbStairs = function(n) {
  if (n <= 2) {
    return n;
  }
  let v1 = 1,
    v2 = 2,
    v3;
  for (let i = 2; i < n; i++) {
    v3 = v2 + v1;
    v1 = v2;
    v2 = v3;
  }
  return v3;
};
