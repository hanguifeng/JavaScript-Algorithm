一堆数组的坐标变换 i，j

本题思路：
第一种

1. 暴力循环，枚举左右边界乘以高度比较面积，O(n^2)的时间复杂度

第二种

1. 双指针左右夹逼，最左最右分别设两个下标 i、j，往中间收敛，左右宽度已经为最大，收敛时比较临近的柱子的高度，更高则收敛
   O(n)的时间复杂度
