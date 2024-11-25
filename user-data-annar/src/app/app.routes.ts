import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UsersFormComponent } from './components/users-form/users-form.component';

export const routes: Routes = [
    { path: 'users', component: UsersComponent},
    { path: 'users/form', component: UsersFormComponent},
    { path: 'users/form/:id', component: UsersFormComponent},
    { path: '', redirectTo: 'users', pathMatch: 'full' }
];
