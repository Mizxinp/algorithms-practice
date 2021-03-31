function BFS(root) {
    const queue = []
    queue.push(root)

    while (queue.length) {
        const top = queue[0]
        console.log(top.value)
        console.log(queue)
        if (top.left) {
            queue.push(top.left)
        }
        if (top.right) {
            queue.push(top.right)
        }
        queue.shift()
    }
}

const root = {
    value: "A",
    left: {
        value: "B",
        left: {
            value: "D"
        },
        right: {
            value: "E"
        }
    },
    right: {
        value: "C",
        right: {
            value: "F"
        }
    }
}

BFS(root)