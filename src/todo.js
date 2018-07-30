/*
  important to note here: this is just ES6, there is no Aurelia dependency at all

  this is the to do class which defines a to do item
 */

export class Todo {
    constructor(description){
        this.description = description;
        this.done = false;
    }
}