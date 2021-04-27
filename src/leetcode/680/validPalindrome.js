/**
 * 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串
 * input aba => true
 * input abca = true
 */

 function isPalindrome(string) {
     const reversedStr = string.split('').reverse().join('')
     return reversedStr === string
 }

 function validPalindrome2(string) {
    const length = string.length
    let i = 0, j = length - 1
    while(i < j && string[i] === string[j]) {
        i ++
        j --
    }

    if (isPalindrome2(i + 1, j)) {
        return true
    }

    if (isPalindrome2(i, j - 1)) {
        return true
    }


    // if (isPalindrome(string.slice(i + 1, j))) {
    //     return true
    // }

    // if (isPalindrome(string.slice(i, j - 1))) {
    //     return true
    // }

    function isPalindrome2(start, end) {
        while(start < end) {
            if (string[string] !== string[end]) {
                return false
            }
            start ++
            end --
        }
        return true
    }

    return false
 }

 console.log(validPalindrome2('abqaqba'))
 console.log(validPalindrome2('abc'))