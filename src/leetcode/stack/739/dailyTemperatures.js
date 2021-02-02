
/**
 * @param {Array} T 一组温度值
 * @returns
 */
function dailyTemperatures(T) {
    const length = T.length
    const stack = []
    const result = new Array(length).fill(0)

    for (let i = 0; i < length; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            const top = stack.pop()
            result[top] = i - top
        }
        stack.push(i)
    }

    return result
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))