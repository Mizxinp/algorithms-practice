/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function (s) {
    if (!s) return true
    if (s.length % 2 !== 0) return false

    const stack = []

    for (ch of s) {
        switch (ch) {
            case '(':
            case '[':
            case '{':
                stack.push(ch)
                break
            case ')':
                if (stack[stack.length - 1] !== '(') return false
                stack.pop()
                break
            case ']':
                if (stack[stack.length - 1] !== '[') return false
                stack.pop()
                break
            case '}':
                if (stack[stack.length - 1] !== '{') return false
                stack.pop()
                break
        }
    }

    return stack.length === 0
};


const isValid = function (s) {
    if (!s) return true
    if (s.length % 2 !== 0) return false

    const stack = []
    const mapLeftToRight = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(mapLeftToRight[ch])
        } else {
            if (!stack.length || ch !== stack.pop()) {
                return false
            }
        }
    }

    return stack.length === 0
}

const data = '()([)'
console.log(isValid(data))