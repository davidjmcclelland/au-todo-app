import {Todo} from './todo';

/*
 important to note here: this is just ES6, there is no Aurelia dependency at all
 the App class manages the functions and logic of the to do app, such as what happens when you press enter after typing in a new item, or when you click add etc.
 */
export class Aop {
    constructor() {
        this.heading = "Todos";
        // todos property is an array fo to-do items
        this.todos = [];
        // a todoDescription is a string handles one-at-a-time
        this.todoDescription = '';
    }

    addTodo(){
        if(this.todoDescription){
            this.todos.push(new Todo(this.todoDescription));
            // reset the text input to empty
            this.todoDescription = '';
        }
    }

    removeTodo(todo) {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}