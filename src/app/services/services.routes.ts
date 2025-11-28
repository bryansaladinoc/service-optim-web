import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/service-list/service-list').then((m) => m.ServiceList),
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./pages/service-form/service-form').then((m) => m.ServiceForm),
  },
  {
    path: 'form/:id',
    loadComponent: () =>
      import('./pages/service-form/service-form').then((m) => m.ServiceForm),
  },
];
