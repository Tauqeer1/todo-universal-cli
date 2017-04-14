import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

    constructor(private http: Http) {

    }

    register(user: Object) {
        return this.http.post('/api/users/', user);
    }
}