// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.stackMain = new Stack();
        this.stackTemp = new Stack();
    }
    add (record){
        while (this.stackMain.peek()){
            this.stackTemp.push(this.stackMain.pop());
        }
        this.stackMain.push(record);
        while (this.stackTemp.peek()){
            this.stackMain.push(this.stackTemp.pop());
        }
    }

    remove(){
        return this.stackMain.pop();
    }

    peek(){
        return this.stackMain.data[this.stackMain.data.length - 1];
    }

}

module.exports = Queue;
