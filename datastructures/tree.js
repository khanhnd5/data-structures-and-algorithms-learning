class Node {
    constructor() {
        this.data = null;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root == null;
    }
    
    insert(value) {
        let tempNode = new Node();
        tempNode.data = value;
        if(!this.isEmpty()) {
            let currentNode = this.root;
            while(true) {
                if(tempNode.data < currentNode.data) {
                    if(currentNode.left == null) {
                        currentNode.left = tempNode;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if(currentNode.right == null) {
                        currentNode.right = tempNode;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        } else {
            this.root = tempNode;
        }
    }

    lookup(value) {
        if(!this.isEmpty()) {
            let iterator = this.root;
            while(iterator != null) {
                if (iterator.data === value) return iterator;
                if (value < iterator.data) {
                    iterator = iterator.left;
                } else {
                    iterator = iterator.right;
                }
            }
            return null;
        } else {
            return null;
        }
    }

    bfs() {
        let queue = [];
        let nodes = [];
        if(this.root == null) return nodes;
        queue.push(this.root);
        while(queue.length != 0) {
            let node = queue[0];
            nodes.push(node.data);
            if(node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
            queue.splice(0, 1);
        }
        return nodes;
    }

    dfs() {
        let stack = [];
        let nodes = [];
        if(this.root == null) return nodes;
        stack.push(this.root);
        while(stack.length != 0) {
            let node = stack[stack.length - 1];
            nodes.push(node.data);
            stack.splice(stack.length - 1, 1);
            if(node.left) {
                stack.push(node.left);
            }
            if(node.right) {
                stack.push(node.right);
            }
        }
        return nodes;
    }

    display() {
        console.log(this.root);
    }
}

let tree = new Tree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(45);
tree.display();
console.log(tree.lookup(20));
console.log(tree.bfs());
console.log(tree.dfs());