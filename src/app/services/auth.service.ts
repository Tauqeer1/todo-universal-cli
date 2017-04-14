import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

    constructor(private http: Http) {

    }

    login(email: string, password: string) {
        return this.http.post('/api/auth', { email: email, password: password });
    }
}