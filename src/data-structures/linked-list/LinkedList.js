class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    insert(value) {
        const newNode = new LinkedList(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode

            return this
        }

        this.tail = newNode
        this.tail.next = newNode

        return this
    }

    delete(value) {
        if (!this.head) {
            return null
        }

        
    }
}


export default LinkedList

