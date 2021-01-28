const leftToRight = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isValid(string) {
  if (!string) {
    return true
  }

  const stack = []
  const length = string.length

  for (let i = 0; i < length; i++) {
    const ch = string[i]

    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(leftToRight[ch])
    } else {
      if (!stack.length || stack.pop() !== ch) {
        return false
      }
    }
  }

  return !stack.length
}

const s1 = '(())'
const s2 = '()[]{}'
const s3 = '([)]'
const s4 = '(]'
const s5 = '{[]}'
console.log(isValid(s1))
console.log(isValid(s2))
console.log(isValid(s3))
console.log(isValid(s4))
console.log(isValid(s5))