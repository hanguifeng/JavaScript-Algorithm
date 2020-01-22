本题思路：

1. 遍历
   prev 初始为 null，current 为 head，将当前节点的指针指向上一个节点，然后顺位移动当前节点和下一个节点
2. 尾递归
   与遍历解法相同，简化了 prev = current，current = next;
