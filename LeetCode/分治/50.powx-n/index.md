本题思路：

1. 暴力循环
2. 分治
   problem：pow(x, n)
   ->subProblem：subResult pow(x \* x, n/2)
   O(logn)的时间复杂度
