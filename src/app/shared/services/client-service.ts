import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private http = inject(HttpClient);
  private API_URL = environment.API_URL;

  getByNameOrNumber() {}

  getAll() {
    return this.http.get<Client[]>(`${this.API_URL}/clients`);
  }
}
