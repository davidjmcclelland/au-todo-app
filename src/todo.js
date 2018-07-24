/*
  important to note here: this is just ES6, there is no Aurelia dependency at all
 */

export class Todo {
    constructor(description){
        this.description = description;
        this.done = false;
    }
}