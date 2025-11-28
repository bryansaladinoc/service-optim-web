import { Client } from '../../shared/models/client';
import { Product } from '../../shared/models/product';

export interface IFieldService {
  id: number;
  date: string;
  nextDate: string;
  status: number;
  client: Client;
  type: number;
  products: Product[];
}

export interface IFieldServiceCreate
  extends Omit<IFieldService, 'id' | 'client'> {
  clientId: number;
}
