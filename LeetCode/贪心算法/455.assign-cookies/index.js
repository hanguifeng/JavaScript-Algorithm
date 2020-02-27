let findContentChildren = function(g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let childIndex = 0;
  for (let i = 0; i < s.length; i++) {
    while (s[i] < g[childIndex]) {
      i += 1;
    }
    if (s[i] >= g[childIndex]) {
      childIndex += 1;
    }
  }
  return childIndex;
};
