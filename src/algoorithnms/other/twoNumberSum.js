/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标
 * numbs = [2, 5, 6, 8], target = 7 则返回 [0, 1]
 * 
 */

// 假设每种输入只会对应一个答案， obj方式
function twoSum(numbers, target) {
    const obj = {}
    for (let i = 0; i < numbers.length; i ++) {
        if (obj[target - numbers[i]] !== undefined) {
            return [obj[target - numbers[i]], i]
        }
        obj[numbers[i]] = i
    }
}

// Map方式
function twoSum2(numbers, target) {
    const obj = new Map()
    for (let i = 0; i < numbers.length; i ++) {
        if (obj.get(target - numbers[i]) !== undefined) {
            return [obj.get(target - numbers[i]), i]
        }
        obj.set(numbers[i], i)
    }
}

// 多种结果 [3, 1, 3, 5, 6, 8] => [ [ 0, 2 ], [ 1, 3 ] ]
function twoSumWidthMultiResult(numbers, target) {
    const obj = new Map()
    const result = []
    for (let i = 0; i < numbers.length; i ++) {
        if (obj.get(target - numbers[i]) !== undefined) {
            result.push([obj.get(target - numbers[i]), i])
        }
        obj.set(numbers[i], i)
    }
    return result
}

const numbers = [3, 1, 3, 5, 6, 8]
target = 6

console.log(twoSum(numbers, target))
console.log(twoSum2(numbers, target))
console.log(twoSumWidthMultiResult(numbers, target))