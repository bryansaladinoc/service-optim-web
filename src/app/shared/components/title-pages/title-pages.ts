import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Location } from '@angular/common';

@Component({
  selector: 'app-title-pages',
  imports: [ButtonModule],
  templateUrl: './title-pages.html',
  styleUrl: './title-pages.scss',
})
export class TitlePages {
  private location = inject(Location);

  title = input.required<string>();
  subtitle = input.required<string>();
  return = input.required<boolean>();

  goBack() {
    this.location.back();
  }
}
