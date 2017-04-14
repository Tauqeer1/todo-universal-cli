import { Component } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { UserService } from '../services/user.service';


@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent  {
    
    title: string = 'Register component';
    user: any = {};
    loading: boolean = false;
    error: boolean = false;
    errorMessage: string = '';
    constructor(private userService: UserService, private router: Router) { }

    register() {
        this.loading = true;
        this.userService.register(this.user)
            .map(res => res.json())
            .subscribe(
                response => {
                    if(response.success) {
                        this.router.navigate(['/login']);
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
            )
    }

    
}
