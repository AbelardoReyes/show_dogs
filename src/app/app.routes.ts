import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { ViewDogsComponent } from './components/section/view-dogs/view-dogs.component';


export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dogs', component: ViewDogsComponent}
];
