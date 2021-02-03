function permute(nums) {
    const length = nums.length
    const current = []
    const result = []
    const visited = {}

    function dfs(nth) {
        if (nth === length) {
            result.push(current.slice())
            return
        }
        for (let i = 0; i < length; i++) {
            if (!visited[nums[i]]) {
                visited[nums[i]] = 1
                current.push(nums[i])
                console.log(current)
                dfs(nth + 1)
                console.log('f')
                current.pop()
                visited[nums[i]] = 0
            }
        }
    }
    dfs(0)
    return result
}

console.log(permute([1, 2, 3]))