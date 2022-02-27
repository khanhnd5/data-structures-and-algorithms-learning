class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    isEmpty() {
        return this.top == null;
    }

    peek() {
        if(!this.isEmpty()) {
            return this.top.data;
        } else {
            throw 'Stack is empty';
        }
    }

    push(value) {
        let tempNode = new Node();
        tempNode.data = value;
        tempNode.next = this.top;
        this.top = tempNode;
    }

    pop() {
        if(!this.isEmpty()) {
            this.top = this.top.next;
        } else {
            throw 'Stack is empty';
        }
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());