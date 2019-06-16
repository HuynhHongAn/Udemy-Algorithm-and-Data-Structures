// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let before = list.head;
    let after = list.head;
    let counter = 0;
    while (after){
        after = after.next;
        counter++;
        if (counter === n){
            before = before.next;
        }
    }
    return before;
}

module.exports = fromLast;
