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

    let newItem = new _Node(item, currNode);

    previousNode.next = newItem;

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

    let newItem = new _Node(item, nextNode);

    currNode.next = newItem;

  }

  insertAt(item, position) {

    if (!this.head) this.insertFirst(item);

    let currNode = this.head;
    let previousNode = this.head;
    let counter = 0;

    while (counter !== position) {

      if (!currNode.next) this.insertLast(item);

      previousNode = currNode;
      currNode = currNode.next;
      counter++;
    }

    let newItem = new _Node(item, currNode);

    previousNode.next = newItem;

  }

}

function display(list) {
  if (!list.head) {
    console.log('Empty list');
    return;
  }

  let currNode = list.head;

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }

}

function size(list) {
  let n = 0;

  if (list.head) {
    n = 1;
  } else {
    console.log('Empty list');
    return;
  }

  let currNode = list.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
    n++;
  }

  console.log(n);
  return n;

}

function isEmpty(list) {
  list.head ? console.log('false') : console.log('true');
}

function findPrevious(list, key) {

  if (!list.head) return;

  let currNode = list.head;
  let previousNode = list.head;

  while (currNode.value !== key) {
    previousNode = currNode;
    currNode = currNode.next;
  }

  console.log(previousNode.value);
  return previousNode.value;
}

function findLast(list) {
  if (!list.head) return;

  let currNode = list.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
  }

  console.log(currNode.value);
  return currNode.value;

}

//////////////////////////
//MYSTERY PROGRAM
/////////////////////////

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//This algorithm keeps sending newNode to the second the last spot in the linked list
//RUNTIME: O(n^2) - polynomial - for the nested while loops.

const SSL = new LinkedList();
const mySSL = new LinkedList();

function main() {

  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  SSL.insertAt('Dylan', 3);
  // console.log(JSON.stringify(SSL, null, 2));

}

main();
// display(SSL);
// display(SSL);
// display(mySSL);
// display(SSL);
// size(mySSL);
// size(SSL);
// isEmpty(mySSL);
// isEmpty(SSL);

// findPrevious(SSL, 'Helo');
// findLast(SSL);