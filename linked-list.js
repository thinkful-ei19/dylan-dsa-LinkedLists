const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }


  find(item) {
    //start at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //Check for the item 
    while (currNode.value !== item) {
      //return null if end of the list 
      // and the item is not on the list
      if (currNode.next === null) {
        return null;
      }
      else {
        //otherwise keep looking 
        currNode = currNode.next;
      }
    }
    //found it
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }
    //if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node 
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
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

    let newItem = new _Node(item);

    previousNode.next = newItem;
    newItem.next = currNode;

  }

  insertAfter(item, key) {

    if (!this.head) this.insertFirst(item);

    if (!this.head.next) this.insertLast(item);

    let currNode = this.head;
    let nextNode = this.head;

    while (currNode.value !== key) {
      currNode = nextNode;
      nextNode = nextNode.next;
    }

    let newItem = new _Node(item);

    currNode.next = newItem;
    newItem.next = nextNode;

  }

}

function main() {

  const SSL = new LinkedList();
  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  SSL.insertAfter('Dylan', 'Helo');
  console.log(JSON.stringify(SSL, null, 2));

}

main();