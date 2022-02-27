class Graph {
    constructor() {
        this.adjacentList = {};
    }

    addNode(node) {
        if(node in this.adjacentList) {
            throw 'Node exist'
        } else {
            this.adjacentList[node] = [];
        }
    }

    addEdge(firstNode, secondNode) {
        if(!(firstNode in this.adjacentList) || !(secondNode in this.adjacentList)) {
            throw 'Node doesn\'t exist'
        } else {
            this.adjacentList[firstNode].push(secondNode);
            this.adjacentList[secondNode].push(firstNode);
        }
    }
}

let graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addEdge(1, 2);
console.log(graph);