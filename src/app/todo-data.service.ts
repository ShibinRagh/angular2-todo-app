import { Injectable } from '@angular/core';

@Injectable()
export class TodoDataService {
    lastId: number = 0;
    todos: Todo[] = [];
    constructor() { }
    
    // Simulate POST /todos
    addTodo(todo: Todo): TodoDataService{
        if(!todo.id){
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    }
    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): TodoDataService{
        this.todos = this.todos.filter(todo => todo.id !== id);
        return this;
    }
    // Simulate PUT /todos/:id
    
    // Simulate GET /todos
        getAllTodos(): Todo[] {
        return this.todos;
    }

}
