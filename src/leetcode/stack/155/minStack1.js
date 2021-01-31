class MinStack1 {
    constructor() {
        this.stack = []
    }
    push(val) {
        this.stack.push(val)
    }
    pop() {
        this.stack.pop()
    }
    top() {
        if (!this.stack || !this.stack.length) {
            return
        }
        return this.stack[this.stack.length - 1]
    }
    getMin() {
        let min = this.stack[0]
        for (let i = 0; i < this.stack.length; i++) {
            if (this.stack[i] < min) {
                min = this.stack[i]
            }
        }
        return min
    }
}

const minStack = new MinStack1();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin())
minStack.pop();
console.log(minStack.top())
console.log(minStack.getMin())