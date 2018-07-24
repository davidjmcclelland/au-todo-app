import {Todo} from './todo';

/*
 important to note here: this is just ES6, there is no Aurelia dependency at all
 */
export class Aop {
    constructor() {
        this.heading = "Todos";
        this.todos = [];
        this.todoDescription = '';
    }

    addTodo(){
        if(this.todoDescrition){
            this.todos.push(new Todo(this.todoDescription));
        }
    }

    removeTodo() {
        let index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
    }
}