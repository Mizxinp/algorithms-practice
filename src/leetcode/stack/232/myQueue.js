class MyQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

    push(val) {
        this.stack1.push(val)
    }

    pop() {
        if (this.stack2.length <= 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    peek() {
        if (this.stack2.length <= 0) {
            while (this.stack1.length !== 0) {
                this.stack2.push(this.stack1.pop())
            }
        }

        const stack2Length = this.stack2.length
        return stack2Length && this.stack2[stack2Length - 1]
    }

    empty() {
        return !this.stack1.length && !this.stack2.length
    }
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek())
console.log(queue.pop())
console.log(queue.empty())