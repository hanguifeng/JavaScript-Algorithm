本题思路：

1. 暴力法
   for i = 0; i < n;
   let minheight
   for j = i; j < n;
   minheight = 比较 height[k] -> 最小高度，求得 area
   minheight \* (j - i + 1) 更新 maxArea
   O(n2)
2. 利用栈
