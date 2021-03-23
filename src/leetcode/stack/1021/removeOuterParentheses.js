/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let result = ''
    let count = 0

    for (ch of S) {
        if (ch === '(' && count++ > 0) result += ch
        if (ch === ')' && count-- > 1) result += ch
    }

    return result
};