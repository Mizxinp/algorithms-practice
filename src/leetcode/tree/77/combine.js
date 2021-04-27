function combine(n, k) {
    const result = []
    const subset = []

    dfs(1)
    function dfs(index) {
        if (subset.length === k) {
            result.push(subset.slice())
            return
        }
        for (let i = index; i <= n; i++) {
            subset.push(i)
            dfs(i + 1)
            subset.pop()
        }
    }

    return result
}

console.log(combine(4, 2))