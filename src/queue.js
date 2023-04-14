const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null
  }
  

  getUnderlyingList() {
    if (this.head != null) {
      return this.head
    }
  }

  enqueue(value) {
    const newNode = new ListNode(value)
    let node = this.head
    if (node == null) {
      this.head = newNode
      return
    }
    while (node.next != null) {
      node = node.next
    }
    node.next = newNode
  }

  dequeue() {
    const tmp = this.head.next
    const top = this.head.value
    this.head = tmp
    return top
  }
}

module.exports = {
  Queue
};
