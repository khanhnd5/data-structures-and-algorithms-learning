class Node {
    constructor() {
        this.data = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        return this.length == 0;
    }

    prepend(value) {
        let temp = new Node();
        temp.data = value;
        temp.next = this.head;
        this.head = temp;
        this.length++;
    }

    append(value) {
        let temp = new Node();
        temp.data = value;
        if(this.head != null) {
            let traveler = this.head;
            while(traveler.next != null) {
                traveler = traveler.next;
            }
            traveler.next = temp;
        } else {
            this.head = temp;
        }
        this.length++;
    }

    at(index) {
        if(index >= 0 && index < this.length) {
            let traveler = this.head;
            for(let i = 1; i <= index; i++) {
                traveler = traveler.next;
            }
            return traveler;
        } else {
            throw 'Index is out of linked list';
        }
    }

    insert(index, value) {
        let temp = new Node();
        temp.data = value;
        if(index == this.length) {
            let traveler = this.head;
            while(traveler.next != null) {
                traveler = traveler.next;
            }
            traveler.next = temp;
        }
        else if(index == 0) {
            this.prepend(value);
        }
        else if(index > 0 && index < this.length) {
            let traveler = this.head;
            for(let i = 1; i < index; i++) {
                traveler = traveler.next;
            }
            temp.next = traveler.next;
            traveler.next = temp;
        } else {
            throw 'Index is out of linked list';
        }
        this.length++;
    }

    remove(index) {
        if(index == this.length - 1) {
            let traveler = this.head;
            while(traveler.next != null) {
                traveler = traveler.next;
            }
            traveler = null;
        }
        else if(index == 0) {
            this.head = this.head.next;
        }
        else if(index > 0 && index < this.length - 1) {
            let traveler = this.head;
            for(let i = 1; i < index; i++) {
                traveler = traveler.next;
            }
            traveler.next = traveler.next.next;
        } else {
            throw 'Index is out of linked list';
        }
    }

    display() {
        let traveler = this.head;
        while(traveler != null) {
            console.log(traveler.data);
            traveler = traveler.next;
        }
    }
}

let list = new LinkedList();
list.prepend(10);
list.append(20);
// list.display();
list.insert(2, 40);
// list.display();
list.insert(2, 50);
// list.display();
list.remove(2);
list.display();