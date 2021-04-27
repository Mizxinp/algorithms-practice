var isHappy = function (n) {
    let pre = n, cur = getNext(n)
    while (pre !== cur && cur != 1) {
        pre = getNext(pre)
        cur = getNext(getNext(cur))
    }
    return cur === 1
}

function getNext(n) {
    let temp = 0
    while (n) {
        temp += (n % 10) * (n % 10)
        n = Math.floor(n / 10)
    }
    return temp
}

console.log(getNext(12))