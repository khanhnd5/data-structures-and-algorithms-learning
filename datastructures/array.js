class Array {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    isEmpty() {
        return this.length == 0;
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        if(!this.isEmpty()) {
            delete this.data[this.length];
            this.length--; 
        } else {
            throw 'Array is empty';
        }
    }

    at(index) {
        if (index >= 0 && index < this.length) {
            return this.data[index];
        } else {
            throw 'Index is out of array';
        }
    }

    insert(index, value) {
        if(index == this.length) {
            this.push(value);
        } else {
            if(index >=0 && index < this.length) {
                for(let i = this.length; i > index; i--){
                    this.data[i] = this.data[i-1];
                }
                this.length++;
            } else {
                throw 'Index is out of array';
            }
        }
    }

    remove(index) {
        if(index >= 0 && index < this.length) {
            for(let i = index; i < this.length - 1; i++) {
                this.data[i] = this.data[i+1];
            }
            delete this.data[this.length-1];
            this.length--;
        } else {
            throw 'Index is out of array';
        }
    }

    display() {
        console.log(this.data);
    }
}

a = new Array();
a.push(10);
a.push(20);
a.push(30);
a.push(40);
a.push(50);
a.push(60);
a.display();
a.pop();
a.pop();
a.display;
a.remove(2);
a.display();
a.insert(3, 70);
a.display();