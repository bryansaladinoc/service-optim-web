import { Component, inject, OnInit } from '@angular/core';
import { ServiceFormField } from './components/service-form-field/service-form-field';
import { TitlePages } from '../../../shared/components/title-pages/title-pages';
import { ClientService } from '../../../shared/services/client-service';
import { Client } from '../../../shared/models/client';
import { Product } from '../../../shared/models/product';
import { ProductService } from '../../../shared/services/product-service';
import { FieldService } from '../../services/field-service';
import { IFieldService, IFieldServiceCreate } from '../../models/field-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-form',
  imports: [ServiceFormField, TitlePages],
  templateUrl: './service-form.html',
  styleUrl: './service-form.scss',
})
export class ServiceForm implements OnInit {
  private clientService = inject(ClientService);
  private productService = inject(ProductService);
  private fieldService = inject(FieldService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  protected pageTitle = 'Crear Servicio';
  protected pageSubtitle = 'Crea un servicio técnico';
  private fieldServiceId: string | null = null;
  serviceData: IFieldService | null = null;

  clients: Client[] = [];
  products: Product[] = [];

  ngOnInit(): void {
    this.getClients();
    this.getProducts();

    this.fieldServiceId = this.route.snapshot.paramMap.get('id');
    const fromState =
      (this.router.getCurrentNavigation()?.extras.state as any)?.service ??
      history.state?.service;

    if (this.fieldServiceId == fromState?.id) {
      this.serviceData = fromState;
    }
  }

  getClients() {
    this.clientService.getAll().subscribe({
      next: (r) => {
        this.clients = r;
      },
    });
  }

  getProducts() {
    this.productService.getAll().subscribe({
      next: (r) => {
        this.products = r;
      },
    });
  }

  getFieldService() {}

  saveFieldService(data: IFieldServiceCreate) {
    console.log(data);

    this.fieldService.save(data).subscribe({
      next: (r) => {
        console.log(r);
        this.router.navigate(['/services']);
      },
    });
  }
}
