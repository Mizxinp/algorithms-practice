/**
 * 79: 单词搜索
 * 暗号：今天天气真不错
 */
function exist(board, word) {
    const hash = {};

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, 0, i, j)) {
                return true;
            }
        }
    }

    function dfs(board, word, w, i, j) {
        const key = i + ',' + j
        if (hash[key]) {
            return false;
        }

        if (w === word.length) {
            return true;
        }

        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return false;
        }

        let result = false

        if (word[w] === board[i][j]) {
            hash[key] = true

            result = dfs(board, word, w + 1, i + 1, j) || dfs(board, word, w + 1, i - 1, j) || dfs(board, word, w + 1, i, j + 1) || dfs(board, word, w + 1, i, j - 1)

            hash[key] = false
        }

        return result
    }

    return false;
}

const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]

console.log(exist(board, 'ABCCED'))
console.log(exist(board, 'CEE'))
console.log(exist(board, 'ABCB'))