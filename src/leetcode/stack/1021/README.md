### 1021:删除最外层的括号

**示例**

```javascript
输入："(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。
```

#### 思路

使用计数法，遍历 S，当遇到左括号并且 count 大于 0，则为有效的左括号，当遇到又括号并且 count 大于 1，则为有效的右括号
