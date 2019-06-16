// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    if (!list.head){
        return;
    }
    let node1 = list.head;
    let node2 = list.head;
    while (node2){
        if (!node2.next || !node2.next.next) {
            node2 = null;
        }
        else {
            node2 = node2.next.next;
            node1 = node1.next;
        }
    }
    return node1;
}

module.exports = midpoint;
