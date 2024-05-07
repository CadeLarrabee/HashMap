import { LinkedList } from "./linkedListModule.js";

function OnEntry() {
  //Generate a linked list here.
  const linkedList = new LinkedList();
  //const nodeOne = new Node(18,null,null);
  //const nodeTwo = new Node(44, null, null);
  //const nodeThree = new Node(2, null, null);

  linkedList.append(18);
  linkedList.append(44);
  linkedList.append(2);
  linkedList.toString();
}

OnEntry();
