class MinStack2 {
    constructor() {
        this.stack = []
        this.stack2 = []
    }
    push(val) {
        this.stack.push(val)

        if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= val) {
            this.stack2.push(val)
        }
    }
    pop() {
        if (this.stack.pop() === this.stack2[this.stack2.length - 1]) {
            this.stack2.pop()
        }
    }
    top() {
        if (!this.stack || !this.stack.length) {
            return
        }
        return this.stack[this.stack.length - 1]
    }
    getMin() {
        return this.stack2[this.stack2.length - 1]
    }
}

const minStack = new MinStack2();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin())
minStack.pop();
console.log(minStack.top())
console.log(minStack.getMin())