import { Component, inject, OnInit } from '@angular/core';
import { TitlePages } from '../../../shared/components/title-pages/title-pages';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RouterLink } from '@angular/router';
import { FieldService } from '../../services/field-service';
import { IFieldService } from '../../models/field-service';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-service-field',
  imports: [
    TitlePages,
    ButtonModule,
    TableModule,
    RouterLink,
    DatePickerModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    SelectModule,
    RadioButtonModule,
    ToastModule,
  ],
  templateUrl: './service-list.html',
  styleUrl: './service-list.scss',
  providers: [MessageService],
})
export class ServiceList implements OnInit {
  private fieldService = inject(FieldService);
  private messageService = inject(MessageService);

  titlePage = 'Servicios';
  subTitlePage = 'Administra los servicios técnicos';
  tableCols = [
    { field: 'clientNumber', header: 'No' },
    { field: 'client', header: 'Cliente' },
    { field: 'date', header: 'Fecha' },
    { field: 'nextDate', header: 'Proximo servicio' },
    { field: 'status', header: 'Estatus' },
    { field: '', header: '' },
  ];
  optionsTecnico = [
    {
      id: 1,
      name: 'Jorge',
    },
    {
      id: 2,
      name: 'Pedro',
    },
    {
      id: 3,
      name: 'Rafael',
    },
  ];
  startDate = new Date();
  endDate = new Date();
  fieldServices: IFieldService[] = [];
  visibleDialog: boolean = false;
  serviceType: any;

  ngOnInit(): void {
    this.getAllFieldServices();
  }

  getAllFieldServices() {
    this.fieldService.getAll().subscribe({
      next: (r) => {
        this.fieldServices = r;
      },
    });
  }

  createOrder() {
    this.visibleDialog = false;

    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Orden de servicio creada',
      life: 3000,
    });
  }
}
