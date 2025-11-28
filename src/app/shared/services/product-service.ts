import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);
  private API_URL = environment.API_URL;

  getAll() {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }
}
