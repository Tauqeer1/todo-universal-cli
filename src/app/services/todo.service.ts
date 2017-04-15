import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

    constructor(private http: Http) {

    }

    addTodo(todo: Object) {
        console.log('todo', todo);
        return this.http.post('/api/todos/', todo);

    }
    updateTodo() {

    }
    deleteTodo(id: string) {
        return this.http.delete('/api/todos/'+ id);
    }
    getAllTodo() {
        return this.http.get('/api/todos');
    }



}