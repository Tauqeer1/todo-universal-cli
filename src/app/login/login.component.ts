import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    user: any = {};
    loading = false;
    error: boolean;
    errorMessage: string = ''
    constructor(private auth: AuthService, private router: Router) {
        console.log('Login Component');
     }

    login() {
        this.loading = true;
        this.auth.login(this.user.email, this.user.password)
            .map(res => res.json())
            .subscribe(res => {
                this.loading = false;
                if (res.success && res.data.token) {
                    console.log('res', res.data);
                    this.auth.userObject = res.data; 
                    this.router.navigate(['/home']);

                }
                else {
                    this.error = res.success;
                    this.errorMessage = res.data;
                    this.loading = false;
                }
            }, err => {
                this.loading = false;
                console.log('err', err);
            })
    }

}
