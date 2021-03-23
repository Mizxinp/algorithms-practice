/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

var validateStackSequences = function (pushed, popped) {
    const stack = []
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i])
        while (stack[stack.length - 1] === popped[0] && stack.length > 0) {
            stack.pop()
            popped.shift()
        }
    }

    return !stack.length
};

// validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1])
validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2])
// validateStackSequences([2, 1, 0], [1, 2, 0])
// validateStackSequences([1, 0, 3, 2], [0, 1, 2, 3])