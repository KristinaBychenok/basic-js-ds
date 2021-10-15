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
module.exports = class Queue {

  queue = new ListNode();

  head = null;
  currentNode = null;

  getUnderlyingList() {
    return this.queue
  }

  enqueue(value) {
    if (this.head === null){
      this.queue.value = value;
      this.head = this.queue;
      this.currentNode = this.queue;
    } else {
      this.currentNode.next = new ListNode(value);
      this.currentNode = this.currentNode.next;
    }
  }

  dequeue() {
    let numdReturn = this.head.value;
    this.queue = this.queue.next;
    this.head = this.head.next;
    return numdReturn;
  }

}
