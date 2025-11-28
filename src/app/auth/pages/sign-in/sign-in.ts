import { Component, inject, model } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Auth } from '../../service/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss'
})
export class SignIn {

  private authService = inject(Auth);
  public email = model<string>('');
  public password = model<string>('');

  public signIn() {
    this.authService.signIn(this.email(), this.password()).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
      },
      error: (error) => {
        console.error('Error en login:', error);
      }
    });
  }
}
