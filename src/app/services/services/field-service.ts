import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IFieldService, IFieldServiceCreate } from '../models/field-service';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FieldService {
  private http = inject(HttpClient);
  private API_URL = environment.API_URL;

  getAll() {
    return this.http.get<IFieldService[]>(`${this.API_URL}/services-field`);
  }

  save(data: IFieldServiceCreate) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<IFieldService>(
      `${this.API_URL}/services-field`,
      data,
      { headers }
    );
  }
}
