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
  {
    path: 'email-recovery',
    loadComponent: () => import('./email-recovery/email-recovery.page').then( m => m.EmailRecoveryPage)
  },
  {
    path: 'account-recovery-success',
    loadComponent: () => import('./account-recovery-success/account-recovery-success.page').then( m => m.AccountRecoverySuccessPage)
  },
  {
    path: 'account-recovery-fail',
    loadComponent: () => import('./account-recovery-fail/account-recovery-fail.page').then( m => m.AccountRecoveryFailPage)
  },
  {
    path: 'account-recovery-password-reset',
    loadComponent: () => import('./account-recovery-password-reset/account-recovery-password-reset.page').then( m => m.AccountRecoveryPasswordResetPage)
  },
  {
    path: 'duplicate-detected',
    loadComponent: () => import('./duplicate-detected/duplicate-detected.page').then( m => m.DuplicateDetectedPage)
  },
  {
    path: 'name-recovery',
    loadComponent: () => import('./name-recovery/name-recovery.page').then( m => m.NameRecoveryPage)
  },
  {
    path: 'password-reset-link',
    loadComponent: () => import('./password-reset-link/password-reset-link.page').then( m => m.PasswordResetLinkPage)
  },
  
];
