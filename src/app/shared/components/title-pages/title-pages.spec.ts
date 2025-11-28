import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePages } from './title-pages';

describe('TitlePages', () => {
  let component: TitlePages;
  let fixture: ComponentFixture<TitlePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
