class LinkedList {
  /* Do not modify the constructor */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /* Add the given value to the tail
  of the list. The `tail` pointer
  should be updated accordingly */
  addToTail(value) {
    const newNode = {
      value: value,
      next: null
    };
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  /* Remove the list's `head` value 
  The `head` pointer should be updated
  accordingly */
  removeHead(value) {
    let toBeRemoved = this.head;
    this.head = toBeRemoved.next;

    return toBeRemoved.value;
  }

  /* Searches the list for the given value
  Returns true or false accordingly */
  contains(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  /* Finds and returns the maximal value
  of all the values in the list */
  getMax() {
    let currentNode = this.head;
    let max = null;

    while (currentNode) {
      if (max < currentNode.value) {
        max = currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return max;
  }
}

module.exports = LinkedList;
