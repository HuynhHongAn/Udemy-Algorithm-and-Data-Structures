// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        let node = this.head;
        while (node){
            if (node.next == null)
               return node;
            node = node.next;
        }
    }

    clear(){
        this.head = null;
        //Chỗ này được xử lý khác C++ là do javascript đã có cơ chế tự giải phòng (được xử lý ngầm bên dưới).
    }

    removeFirst(){
        if (this.head){
            this.head = this.head.next;
        }
    }

    removeLast(){
        if (this.size() === 0){
            return;
        }
        if (this.size() === 1) {
            this.head = null;
            return;
        }
        let prevNode = this.head;
        let node = this.head.next;
        while (node.next){
            prevNode = node;
            node = node.next;
        }
        prevNode.next = null;
    }

    insertLast(data){
        let node = new Node(data);
        if (this.head == null){
            this.head = node;
            return
        }
        let lastNode = this.getLast();
        lastNode.next = node;
    }

    getAt(pos){
        if (pos >= this.size())
            return null;
        let node = this.head;
        let counter = 0;
        while (counter < pos){
            node = node.next;
            counter++;
        }
        return node;
    }

    removeAt(pos){
        if (pos >= this.size())
            return;
        if (pos === 0){
            this.removeFirst();
        }
        else {
            let prevNode = this.getAt(pos - 1);
            let node = this.getAt(pos);
            if (node.next){
                prevNode.next = node.next;
            }
            else {
                prevNode.next = null;
            }
        }
    }

    insertAt(data, pos){
        let size = this.size();
        if (pos >= size)
            pos = size-1;
        if (pos === 0){
            this.insertFirst(data);
        }
        else if (pos === size - 1){
            this.insertLast(data);
        }
        else {
            let prevNode = this.getAt(pos - 1);
            let nextNode = this.getAt(pos);
            prevNode.next = new Node(data, nextNode);
        }
    }

    forEach(fn){
        let node = this.head;
        let counter = 0;
        while (node){
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while (node){
            yield node;
            node = node.next;
        }
    }

}

module.exports = { Node, LinkedList };
