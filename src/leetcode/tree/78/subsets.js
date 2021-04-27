function subset(nums) {
    const length = nums.length
    const result = []
    const subset = []
    dfs(0)
    function dfs(index) {
        result.push(subset.slice())
        for (let i = index; i < length; i++) {
            subset.push(nums[i])
            dfs(i + 1)
            subset.pop()
        }
    }
    return result
}

console.log(subset([1, 2, 3]))