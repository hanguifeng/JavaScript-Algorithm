let intersection = function(nums1, nums2) {
  const temps = [];
  const result = [];
  const nums2Obj = {};
  for (let i = 0; i < nums2.length; i++) {
    nums2Obj[nums2[i]] = nums2[i];
  }
  const _nums2 = Object.keys(nums2Obj);
  for (let i = 0; i < nums1.length; i++) {
    temps[nums1[i]] = nums1[i];
  }
  for (let j = 0; j < _nums2.length; j++) {
    if (temps[_nums2[j]] !== undefined) {
      result.push(temps[_nums2[j]]);
    }
  }
  return result;
};
