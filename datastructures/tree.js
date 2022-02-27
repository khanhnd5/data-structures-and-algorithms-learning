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

    display() {
        console.log(this.root);
    }
}

let tree = new Tree();
tree.insert(9);
tree.insert(1);
tree.insert(4);
tree.insert(10);
tree.insert(20);
tree.display();
console.log(tree.lookup(10));