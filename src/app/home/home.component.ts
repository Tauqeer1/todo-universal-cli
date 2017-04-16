import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TodoService } from '../services/todo.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    todo: any = {};
    user: any = {};
    todos: any = [];
    loading = false;
    error: boolean;
    errorMessage: string = ''
    constructor(private todoService: TodoService, authService: AuthService) {
        this.user = authService.userObject;
        console.log('this.user', this.user);
        this.getAllTodos();
    }
    addTodo() {
        this.loading = true;
        if (!this.todo) {
            return;
        }
        let todo = {
            user_id: this.user.id,
            text: this.todo.text
        }
        console.log('todo', todo);
        this.todoService.addTodo(todo)
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
        if (this.user.id) {
            this.todoService.getAllTodo(this.user.id)
                .map(res => res.json())
                .subscribe(response => {
                    console.log('response', response);
                    this.todos = response.data;
                }, err => {
                    console.log('err', err);
                })
        }
    }
}