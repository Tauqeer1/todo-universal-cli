import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes/app.route';
import { AppComponent } from './index';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { TodoService } from './services/todo.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    /** Root App Component */
    bootstrap: [AppComponent],
    /** Our Components */
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        UserService,
        AuthService,
        TodoService
    ]
})
export class AppModule {

}
