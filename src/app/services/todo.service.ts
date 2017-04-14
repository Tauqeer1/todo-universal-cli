import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

    constructor(private http: Http) {

    }

    addTodo() {

    }
    updateTodo() {

    }
    deleteTodo() {

    }
    getAllTodo() {
        return this.http.get('/api/todos');
    }



}