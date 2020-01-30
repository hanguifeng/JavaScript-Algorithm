let isValid = function(s) {
  const stack = [];
  //   const reg = /\(|\[|\{/;
  //   const reg1 = /\(\)|\[\]|\{\}/;
  //   for (let i = 0; i < s.length; i++) {
  //     if (reg.test(s[i])) {
  //       stack.push(s[i]);
  //     } else if (reg1.test(`${stack[stack.length - 1]}${s[i]}`)) {
  //       stack.pop();
  //     } else {
  //       return false;
  //     }
  //   }
  const map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  for (let key of s) {
    if (key in map) {
      stack.push(key);
    } else if (map[stack.pop()] !== key) {
      return false;
    }
  }
  return !stack.length;
};
