export class Node {
  //
  //A node is a basic data structure that knows two things.
  //What its connected to, behind it, and ahead of it. "next" and "previous"
  //what data it stores,
  //Whether it is a head node, or a tail node.
  //Tail nodes have no next, and head nodes have no previous.
  //
  constructor(data, nextNode, prevNode) {
    this.data = data;
    this.nextNode = nextNode;
    this.prevNode = prevNode;
  }
  displayNodeDetails() {
    console.log(this.data, this.nextNode, this.prevNode);
  }
  //
  // Getters
  //

  getData() {
    return this.data;
  }

  getNextNode() {
    return this.nextNode;
  }

  getPrevNode() {
    return this.prevNode;
  }

  //
  // Setters
  //

  setData(data) {
    this.data = data;
  }

  setNextNode(nextNode) {
    this.nextNode = nextNode;
  }

  setPrevNode(prevNode) {
    this.prevNode = prevNode;
  }
}
