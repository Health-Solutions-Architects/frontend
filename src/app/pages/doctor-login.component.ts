import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: 'doctor-login.component.html',
  styleUrl: 'doctor-login.component.scss',
})
export class DoctorLoginComponent {
  private fb = inject(NonNullableFormBuilder);
  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {}
}
