function atoi(str) {
    const reg = /\s*([-\+]?[0-9]*).*/

    const match = str.match(reg)
    const max = Math.pow(2, 31) - 1
    const min = -max - 1

    let resultNum = 0

    if (match) {
        resultNum = +match[1]

        if (isNaN(resultNum)) {
            resultNum = 0
        }
    }

    if (resultNum > max) {
        return max
    } else if (resultNum < min) {
        return min
    }

    return resultNum
}

console.log(atoi("-42"))
console.log(atoi("42"))
console.log(atoi("4193 with words"))
console.log(atoi("words and 987"))
console.log(atoi("-91283472332"))