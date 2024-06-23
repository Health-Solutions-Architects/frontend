import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '@Services/auth.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: 'doctor-login.component.html',
  styleUrl: 'doctor-login.component.scss',
})
export class DoctorLoginComponent {
  private fb = inject(NonNullableFormBuilder);
  private authService = inject(AuthService);
  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  loginError = false;

  onSubmit() {
    this.authService.login(this.form.value);
  }
}
