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
        if (!this.todo) {
            return;
        }
        this.todoService.addTodo(this.todo)
            .map(res => res.json())
            .subscribe(
            response => {
                if (response.success) {
                    this.todo = {};
                    this.loading = false;
                    this.getAllTodos();
                }
                else {
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
        this.todoService.deleteTodo(id)
            .map(res => res.json())
            .subscribe(res => {
                if (res.success) {
                    this.getAllTodos();
                }
            })
    }
    updateTodo() {
        console.log('updateTodo');
    }

    getAllTodos() {
        console.log('get all todos');
        this.todoService.getAllTodo()
            .map(res => res.json())
            .subscribe(response => {
                console.log('response', response);
                this.todos = response.data;
            }, err => {
                console.log('err', err);
            })
    }
}