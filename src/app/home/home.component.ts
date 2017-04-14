import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {

    todo: any = {};
    loading = false;
    error: boolean;
    errorMessage: string = ''
    constructor(private todoService: TodoService) {
        this.todoService.getAllTodo()
            .subscribe()
    }   
    addTodo() {

    }
    deleteTodo() {

    }
    updateTodo() {

    }
}