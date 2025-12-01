import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../service/auth';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  const token = auth.getToken();
  if (token) {
    return true;
  }

  return router.parseUrl('/login');
};
