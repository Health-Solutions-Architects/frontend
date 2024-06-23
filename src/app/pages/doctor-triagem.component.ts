import { NavbarComponent } from '@Components/navbar.component';
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
  imports: [
    ReactiveFormsModule,
    NgxMaskDirective,
    CalendarModule,
    NavbarComponent,
  ],
  templateUrl: 'doctor-triagem.component.html',
  styleUrl: 'doctor-triagem.component.scss',
})
export class DoctorTriagemComponent {
  private fb = inject(NonNullableFormBuilder);
  protected form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(5)]],
    cpf: ['', [Validators.required]],
    peso: ['', [Validators.required, Validators.max(250), Validators.min(0)]],
    altura: ['', [Validators.required, Validators.max(2.8), Validators.min(0)]],
    data_nascimento: this.fb.control<Date | null>(null, [Validators.required]),
    sintomas: [
      '',
      [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(128),
      ],
    ],
    sexo: ['', [Validators.required]],
    oximetria: ['', [Validators.required]],
    pressao: ['', [Validators.required]],
    temperatura: ['', [Validators.required]],
    prioridade: ['', [Validators.required]],
  });

  onSubmit() {}
}
