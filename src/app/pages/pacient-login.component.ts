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
  templateUrl: 'pacient-login.component.html',
  styleUrl: 'pacient-login.component.scss',
})
export class PacientLoginComponent {
  private fb = inject(NonNullableFormBuilder);
  protected form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSubmit() {}
}
