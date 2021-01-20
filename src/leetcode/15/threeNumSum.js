/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * input: nums = [-1, 0, 1, 2, -1, -4]
 * output: [ [-1, 0, 1], [-1, -1, 2] ]
 */

function threeNumSum(numbers) {
    const result = []
    const nums = numbers.sort((a, b) => a - b)
    const length = nums.length

    // 遍历到倒数第三个即可
    for (let i = 0; i < length - 2; i++) {
        let m = i + 1
        let n = length - 1

        // 遇到重复的则跳过
        if (i > 0 && nums[i] === nums[i - 1]) { continue }

        while(m < n) {
            if (nums[i] + nums[m] + nums[n] < 0) { // 三数和小于0
                m ++

                while(nums[m] === nums[m -1]) {
                    m ++
                }
            } else if (nums[i] + nums[m] + nums[n] > 0) { // 三数和小于0
                n --

                while(nums[n]=== nums[n + 1]) {
                    n --
                }
            } else {
                result.push([nums[i], nums[m], nums[n]])

                m ++
                n --

                while(nums[m] === nums[m -1]) {
                    m ++
                }

                while(nums[n]=== nums[n + 1]) {
                    n --
                }
            }
        }
    }

    return result
}

const arr = [-1, 0, 1, 2, -1, -4]

console.log(threeNumSum(arr))