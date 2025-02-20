import { Routes } from '@angular/router';



export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'register',
    loadComponent: () => import('./registration/registration.page').then( m => m.RegistrationPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'add-item-modal',
    loadComponent: () => import('./add-item-modal/add-item-modal.page').then( m => m.AddItemModalPage)
  },
  {
    path: 'landing',
    loadComponent: () => import('./landing/landing.page').then((m) => m.LandingPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'events',
    loadComponent: () => import('./events/events.page').then( m => m.EventsPage)
  },
  
];
