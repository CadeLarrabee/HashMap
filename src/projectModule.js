import { parse } from "date-fns";
export class Project {
  constructor(id, name, description, dueDate, priority, tasks) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.tasks = tasks ? tasks : [];
  }

  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Description: ${this.description}`);
    console.log(`Due Date: ${this.dueDate}`);
  }

  // Getter methods
  get projectId() {
    return this.id;
  }

  get projectName() {
    return this.name;
  }

  get projectDesc() {
    return this.description;
  }

  get projectDue() {
    return this.dueDate;
  }

  get projectPrio() {
    return this.priority;
  }

  get projectTasks() {
    return this.tasks;
  }

  get DomElement() {
    return this.domElement;
  }

  // Setter methods
  set projectName(newName) {
    this.name = newName;
  }

  set projectDesc(newDesc) {
    this.description = newDesc;
  }

  set projectDue(newDate) {
    this.dueDate = new Date(newDate);
  }

  set projectPrio(newPrio) {
    this.priority = newPrio;
  }

  set projectTasks(newTasks) {
    this.tasks = newTasks;
  }

  set DomElement(element) {
    this.domElement = element;
  }
}
