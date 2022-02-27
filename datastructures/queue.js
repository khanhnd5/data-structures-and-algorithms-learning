class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head == null;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.head.data;
        } else {
            throw 'Queue is empty';
        }
    }

    enQueue(value) {
        let tempNode = new Node();
        tempNode.data = value;
        if(this.isEmpty()) {
            this.head = tempNode;
        } else {
            let iterator = this.head;
            while(iterator.next != null) {
                iterator = iterator.next;
            }
            iterator.next = tempNode;
        }
    }

    deQueue() {
        if(!this.isEmpty()) {
            this.head = this.head.next;
        } else {
            throw 'Queue is empty';
        }
    }
}

let queue = new Queue();
queue.enQueue(10);
queue.enQueue(20);
queue.enQueue(30);
console.log(queue.peek());
queue.deQueue();
console.log(queue.peek());