/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.stack2 = transform(this.stack1, this.stack2)
    return this.stack2.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    this.stack2 = transform(this.stack1, this.stack2)
    const result = this.stack2.pop()
    this.stack2.push(result)
    return result
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack1.length === 0 && this.stack2.length === 0
};

// 将stack1中的数放入stack2中
function transform(stack1, stack2) {
    if (stack2.length === 0) {
        while (stack1.length !== 0) {
            stack2.push(stack1.pop())
        }
    }
    return stack2
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */