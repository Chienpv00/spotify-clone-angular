import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'login', loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent) },
  { path: 'signup', loadComponent: () => import('./core/auth/auth.component').then(m => m.AuthComponent) },
];
