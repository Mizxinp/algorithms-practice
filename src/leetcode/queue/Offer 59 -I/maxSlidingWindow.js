function maxSlidingWindow(nums, k) {
    const length = nums.length
    const result = []
    let left = 0
    let right = k - 1

    while (right < length) {
        const max = Math.max.apply(null, nums.slice(left, right + 1))
        result.push(max)
        left++;
        right++
    }

    return result
}

function maxSlidingWindow1(nums, k) {
    const length = nums.length
    const result = []
    const queue = []

    for (let i = 0; i < length; i++) {
        // 当队尾元素大于当前元素
        while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
            queue.pop()
        }
        queue.push(i)
        // 当队头元素当索引已经在滑动窗口之外了
        while (queue.length && queue[0] <= i - k) {
            queue.shift()
        }
        // 只有被遍历元素大于k的时候，才更新结果数组
        if (i >= k - 1) {
            result.push(nums[queue[0]])
        }
    }
    return result
}

const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
console.log(maxSlidingWindow(nums, k))
console.log(maxSlidingWindow1(nums, k))