import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFormField } from './service-form-field';

describe('ServiceFormField', () => {
  let component: ServiceFormField;
  let fixture: ComponentFixture<ServiceFormField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceFormField]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceFormField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
