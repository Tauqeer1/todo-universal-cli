import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    private user: any;
    constructor(private http: Http) {}

    public get userObject():any {
        return this.user;
    }
    public set userObject(user: any) {
        console.log('user', user);
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    }
    login(email: string, password: string) {
        return this.http.post('/api/auth', { email: email, password: password });
            /*.map((res: Response) => {
                let user = res.json();
                if(user && user.token) {
                    localStorage.setItem('user', JSON.stringify(user));
                    this.user = user;
                    return user;
                }
            })*/
    }
}