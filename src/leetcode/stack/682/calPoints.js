/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let stack = []
    for (let i = 0; i < ops.length; i++) {
        switch (ops[i]) {
            case '+':
                stack.push(stack.slice(-1)[0] + stack.slice(-2)[0])
                continue
            case 'C':
                stack.pop()
                continue
            case 'D':
                stack.push(stack.slice(-1)[0] * 2)
                continue
            default:
                stack.push(Number(ops[i]))
        }
    }
    console.log(stack)
    return stack.reduce((acc, cur) => acc + cur, 0)
};
