import { Node } from "./nodeModule.js";
export class LinkedList {
  constructor(nodes) {
    //if we needed multiple lists this would need an id system
    //this.id = id;
    this.nodes = nodes ? nodes : [];
  }
  append(value) {
    //Add a new node containing the value to the end.
    //const newTask = new Task(id, name, ...);
    const nodeLength = this.nodes.length;

    const newNode = new Node(value, null, this.nodes[nodeLength - 1]);
    if (nodeLength > 0) {
      this.nodes[nodeLength - 1].setNextNode(newNode);
    }
    this.nodes.push(newNode);
  }
  prepend(value) {
    //Add the nextNode as the current head
    const newNode = new Node(value, this.nodes[0], null);

    if (this.nodes.length === 0) {
      // If the list is empty, set the new node as both head and tail
      this.nodes.push(newNode);
    } else {
      //Set the previous node to the new head.
      this.nodes[0].setPrevNode(newNode);
      //Shift the nodes down. Thanks array functions!
      this.nodes.unshift(newNode);
    }
  }
  size() {
    //return the total number of nodes
    return this.nodes.length;
  }
  head() {
    //return the first node
    if (this.nodes[0] == null) {
      return null;
    } else return this.nodes[0];
  }
  tail() {
    //return the last node.
    linkedListLength = this.nodes.length;
    if (this.nodes[linkedListLength - 1] == null) {
      return null;
    } else return this.nodes[linkedListLength - 1];
  }
  at(index) {
    //return the value at a specific index in the linked list
    return this.nodes[index];
  }
  pop() {
    //removes the last value from the list.
    this.nodes.pop();
  }
  contains(value) {
    //returns true if the passed in value is in the list, otherwise false
    this.nodes.forEach((element) => {
      if (element.getData() === value) {
        return true;
      }
    });
    return false;
  }
  find(value) {
    //return the index where value is found, otherwise false.
    //Don't use forEach here, it can't give you the index.
    //Instead, arrays have a built in function for
    // finding an index that satisfies some search query.
    const index = this.nodes.findIndex((node) => node.getData() === value);
    return index !== -1 ? index : false;
  }
  toString() {
    //print object as a string node by node.
    this.nodes.forEach((element) => {
      console.log("[" + element.getData() + "] =>");
      element.displayNodeDetails();
    });
  }
}
