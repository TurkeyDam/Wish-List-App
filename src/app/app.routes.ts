import { Routes } from '@angular/router';



export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then( m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./registration/registration.page').then( m => m.RegistrationPage)
  },
  
];
