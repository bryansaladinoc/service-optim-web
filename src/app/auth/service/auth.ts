import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private API_URL = environment.API_URL;
  private http: HttpClient = inject(HttpClient);

  public signIn(email: string, password: string) {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.API_URL}/auth/sign-in`, {
      email,
      password
    }, { headers });
  }
}
