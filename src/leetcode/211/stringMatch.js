/**
 * 设计一个支持以下两种操作的数据结构：
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 */

const WordWarehouse = function() {
    this.words = {}
}

WordWarehouse.prototype.addWord = function(word) {
    if (this.words[word.length]) {
        this.words[word.length].push(word)
    } else {
        this.words[word.length] = [word]
    }
}

WordWarehouse.prototype.search = function(word) {
    if (!this.words[word.length]) {
        return false
    }
    if (!word.includes('.')) {
        return this.words[word.length].includes(word)
    }

    const reg = new RegExp(word)

    return this.words[word.length].some(item => reg.test(item))
}

const wordWarehouse = new WordWarehouse()

wordWarehouse.addWord("bad")
wordWarehouse.addWord("dad")
wordWarehouse.addWord("mad")

console.log(wordWarehouse.search('pad'))
console.log(wordWarehouse.search('bad'))
console.log(wordWarehouse.search('.ad'))
console.log(wordWarehouse.search('b..'))