import {
  Component,
  inject,
  input,
  output,
  OnInit,
  signal,
} from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePipe } from '@angular/common';
import { Client } from '../../../../../shared/models/client';
import { Product } from '../../../../../shared/models/product';
import { TableModule } from 'primeng/table';
import {
  IFieldService,
  IFieldServiceCreate,
} from '../../../../models/field-service';

@Component({
  selector: 'app-service-form-field',
  imports: [
    InputTextModule,
    DatePickerModule,
    SelectModule,
    ReactiveFormsModule,
    ButtonModule,
    DatePipe,
    TableModule,
    FormsModule,
  ],
  templateUrl: './service-form-field.html',
  styleUrl: './service-form-field.scss',
})
export class ServiceFormField implements OnInit {
  fb = inject(FormBuilder);
  form!: FormGroup;
  clients = input.required<Client[]>();
  products = input.required<Product[]>();
  serviceData = input.required<IFieldService | null>();
  saveFieldService = output<IFieldServiceCreate>();
  assignedProducts: any[] = [];
  productSelected: Product | null = null;
  quantity = signal(0);

  serviceTypes: any[] = [
    {
      name: 'Técnico',
      code: 1,
    },
    {
      name: 'Visita',
      code: 2,
    },
  ];

  tableCols = [
    { field: 'no', header: 'Número' },
    { field: 'des', header: 'Descripción' },
    { field: 'cantidad', header: 'Cantidad' },
  ];

  ngOnInit(): void {
    this.initForm();

    this.form.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  save() {
    const data: IFieldServiceCreate = {
      date: this.form.get('serviceDate')?.value,
      nextDate: this.form.get('serviceNextDate')?.value,
      clientId: this.form.get('client')?.value?.id,
      type: this.form.get('serviceType')?.value?.code,
      products: this.assignedProducts,
      status: 1,
    };

    this.saveFieldService.emit(data);
  }

  private initForm() {
    console.log(this.serviceData()?.nextDate);

    this.form = this.fb.group({
      serviceDate: [
        this.serviceData()?.date
          ? new Date(this.serviceData()!.date)
          : new Date(),
      ],
      serviceNextDate: [
        this.serviceData()?.nextDate
          ? new Date(this.serviceData()!.nextDate)
          : '',
      ],
      client: [this.serviceData()?.client ? this.serviceData()?.client : ''],
    });
  }

  addProduct(product: Product) {
    this.assignedProducts.push({ ...product, quantity: this.quantity() });
    this.quantity.set(0);

    this.productSelected = null;
  }

  get serviceDateField() {
    return this.form.get('serviceDate')?.value;
  }

  get serviceNextDateField() {
    return this.form.get('serviceNextDate')?.value;
  }

  get clientField() {
    return this.form.get('client')?.value;
  }

  get serviceTypeField() {
    return this.form.get('serviceType')?.value;
  }
}
