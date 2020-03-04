本题思路

1. 循环找旋转的位置，再正过来，O(n)
2. 二分查找
   关键点在于判定 target 在哪个半区
   nums : 0~mid~high
   low:0
   high = nums.lenght-1、mid = (low+high)/2
   当 target 在[mid+1,high]中时，low = mid +1
   当 target 在[0,mid]中时，high = low
   当[0,mid] 单调即升序时，nums[0] <= nums[mid]
   当 target > nums[mid] || target < nums[0]时
   low = mid+1
   否则
   high = mid
   当[0,mid] 不单调时（如[4,5,6,0,1,2,3]中等[4~0]），nums[0] > nums[mid]
   当 target < nums[0] && target > nums[mid]（为什么且，因为上面说了大于 mid 的元素不一定就在 mid 右边，如 target == 5 时，这是旋转数组的特性，所以取交集）,
   low = mid+1
   否则
   high = mid
   直到 low==high 时间，即两边夹逼只剩一个数组元素没有比较时，判断是否等于 target，是返回 low/high，否返回-1
