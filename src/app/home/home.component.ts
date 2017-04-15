import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    todo: any = {};
    todos: any = [];
    loading = false;
    error: boolean;
    errorMessage: string = ''
    constructor(private todoService: TodoService) {
        this.getAllTodos();
    }
    addTodo() {
        this.loading = true;
        console.log('this.todo', this.todo);
        if (!this.todo) {
            return;
        }
        this.todoService.addTodo(this.todo)
            .map(res => res.json())
            .subscribe(
            response => {
                console.log('response', response);
                if (response.success) {
                    this.todo = {};
                    this.loading = false;
                    this.getAllTodos();
                }
                else {
                    console.log('response', response);
                    this.error = response.success;
                    this.errorMessage = response.data;
                    this.loading = false;
                }
            },
            error => {
                this.loading = false;
                console.error('error', error);
            }
            );
    }
    deleteTodo(id: string) {
        console.log('deleteTodo', id);
        this.todoService.deleteTodo(id)
            .map(res => res.json())
            .subscribe(res => {
                if(res.success) {
                    this.getAllTodos();
                }
            })
    }
    updateTodo() {
        console.log('updateTodo');
    }
    getAllTodos() {
        this.todoService.getAllTodo()
            .map(res => res.json())
            .subscribe(response => {
                this.todos = response.data;
            })
    }
}