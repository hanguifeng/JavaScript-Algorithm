let isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const getHashTable = string => {
    const obj = {};
    const arr = string.split("");
    arr.forEach(n => {
      if (obj[n]) {
        obj[n] += 1;
      } else {
        obj[n] = 1;
      }
    });
    return obj;
  };
  const obj1 = getHashTable(s);
  const obj2 = getHashTable(t);
  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
};
