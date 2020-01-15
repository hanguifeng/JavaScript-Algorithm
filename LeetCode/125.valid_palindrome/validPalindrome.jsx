// alphanumeric
// 第一种：利用原生方法
const isPalindrome = s => {
  const filterNonNumberAndChar = s => s.replace(/[^A-Za-z0-9]/g, "");
  const reversedString = s =>
    s
      .split("")
      .reverse()
      .join("");

  const filteredS = filterNonNumberAndChar(s);
  const reversedS = reversedString(filteredS);
  return reversedS.toLowerCase() === filteredS.toLowerCase();
};
// 第一种：双指针
const isPalindrome = s => {
  const _s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  let right = _s.length - 1;
  while (left < right) {
    if (_s[left] !== _s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
