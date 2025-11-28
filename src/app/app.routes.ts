import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/pages/sign-in/sign-in').then((c) => c.SignIn),
  },
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.routes').then((r) => r.routes),
      },
    ],
  },
];
