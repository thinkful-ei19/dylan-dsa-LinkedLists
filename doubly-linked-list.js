class _DoubleNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _DoubleNode(item, this.head, this.head);
    this.tail = this.head;
  }

  insertLast(item) {
    if (!this.head) this.insertFirst(item);

    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    currNode.next = new _DoubleNode(item, null, currNode);
    this.tail = currNode.next;

  }

  insertBefore(item, key) {

    if (!this.head) this.insertFirst(item);

    if (this.head.value === key) this.insertFirst(item);

    let currNode = this.head;
    let previousNode = this.head;

    while (currNode.value !== key) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    let newItem = new _DoubleNode(item, currNode, previousNode);
    previousNode.next = newItem;

  }


}

const DBL = new DoublyLinkedList();

function main() {

  DBL.insertFirst('Apollo');
  DBL.insertLast('Boomer');
  DBL.insertLast('Helo');
  DBL.insertLast('Husker');
  DBL.insertLast('Starbuck');
  DBL.insertLast('Tauhida');
  DBL.insertBefore('Dylan', 'Boomer');

  console.log(DBL);
  // console.log(JSON.stringify(DBL, null, 2));

}

main();