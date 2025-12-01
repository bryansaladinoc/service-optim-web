import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private API_URL = environment.API_URL;
  private http: HttpClient = inject(HttpClient);
  private readonly TOKEN_KEY = 'auth_token';

  public signIn(email: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http
      .post(
        `${this.API_URL}/auth/sign-in`,
        {
          email,
          password,
        },
        { headers }
      )
      .pipe(
        tap((resp: any) => {
          const token = resp?.token;
          if (token) {
            this.setToken(token);
          }
        })
      );
  }

  public setToken(token: string) {
    try {
      localStorage.setItem(this.TOKEN_KEY, token);
    } catch (_) {
      // Fallback to sessionStorage if localStorage is not available
      sessionStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  public getToken(): string | null {
    try {
      return (
        localStorage.getItem(this.TOKEN_KEY) ||
        sessionStorage.getItem(this.TOKEN_KEY)
      );
    } catch (_) {
      return sessionStorage.getItem(this.TOKEN_KEY);
    }
  }

  public clearToken() {
    try {
      localStorage.removeItem(this.TOKEN_KEY);
    } catch (_) {
      // ignore
    }
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
