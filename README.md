# au-todo-app
tracks https://aurelia.io/docs/tutorials/creating-a-todo-app/

Lesson 1:

1. Our application has a heading of "Todos".
1. The todo list is modeled as an array of Todo instances represented by the todos property.
1. Todo instances can be added (addTodo) or removed (removeTodo).
1. When instances are added, they are given a description, provided by the user.
1. After the Todo is added, the description is cleared to enable the next addition.

Here's what's amazing. This is all the ES Next code for the app. But where is Aurelia? Well, the answer is that Aurelia tries as hard as possible to stay out of your ES Next code. That's why you don't see it above. It's not needed. Aurelia has the ability to render plain ES Next objects.

NodeJS with npm - To start up a simple web server in the project folder, 
* first globally install the http-server command with 

`npm install http-server -g`

* Once that is installed, change directory to the project folder. You can now spin up the server from within the folder with the following command 

`http-server -o -c-1`