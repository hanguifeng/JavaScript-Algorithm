const isPalindrome = s => {
  // alphanumeric
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
