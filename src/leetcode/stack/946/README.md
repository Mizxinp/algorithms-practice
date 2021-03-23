### 946:验证栈顺序

给定  pushed  和  popped  两个序列，每个序列中的 值都不重复，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false

**示例**

```javascript
输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
输出：true
解释：我们可以按以下顺序执行：
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
```

#### 思路

循环 pushed 队列，定义空栈 stack，每次循环先入栈，再判断栈顶元素和 popped 的第一个元素是否相等，相等则删除 popped 的第一个元素和 stack 的栈顶元素。最后如果 stack 为空则为 true
