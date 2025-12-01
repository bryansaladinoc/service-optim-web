import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Auth } from '../service/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const router = inject(Router);

  const token = auth.getToken();

  // Optionally skip adding the header for the login endpoint
  const isAuthEndpoint = req.url.includes('/auth/sign-in');

  const authReq =
    token && !isAuthEndpoint
      ? req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        })
      : req;

  return next(authReq).pipe(
    catchError((err) => {
      if (err?.status === 401) {
        auth.clearToken();
        router.navigateByUrl('/login');
      }
      return throwError(() => err);
    })
  );
};
