let merge = function(nums1, m, nums2, n) {
  let k = 0;
  let j = 0;
  let result = [];
  const temps1 = nums1.slice(0, m);
  const temps2 = nums2.slice(0, n);
  while (k < m && j < n) {
    if (temps1[k] < temps2[j]) {
      result.push(temps1[k]);
      k++;
    } else {
      result.push(temps2[j]);
      j++;
    }
  }
  if (k >= m) {
    result = result.concat(temps2.slice(j));
  }
  if (j >= n) {
    result = result.concat(temps1.slice(k));
  }
  for (let i = 0; i < result.length; i++) {
    nums1[i] = result[i];
  }
};

let merge = function(nums1, m, nums2, n) {
  let count = m + n;
  while (m > 0 && n > 0) {
    nums1[--count] = nums1[m - 1] < nums2[n - 1] ? nums2[--n] : nums1[--m];
  }
  if (n > 0) {
    nums1.splice(0, n, ...nums2.splice(0, n));
  }
};
