import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';
import { CalendarModule } from 'primeng/calendar';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, CalendarModule],
  templateUrl: 'trilha.component.html',
  styleUrl: 'trilha.component.scss',
})
export class TrilhaComponent {
  private fb = inject(NonNullableFormBuilder);
  protected form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    height: this.fb.control<number | null>(null, [
      Validators.required,
      Validators.max(2.8),
      Validators.min(0),
    ]),
    dateOfBirth: this.fb.control<Date | null>(null, [Validators.required]),
    symptoms: [
      '',
      [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(128),
      ],
    ],
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
