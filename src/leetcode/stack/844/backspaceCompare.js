/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    return stackOperation(S) === stackOperation(T)
};

function processedString(string) {
    const stack = []
    for (const s of string) {
        if (s === '#' && stack.length !== 0) {
            stack.pop()
        } else {
            stack.push()
        }
    }
    return stack.join()
}

console.log(backspaceCompare("a#c", 'b'))