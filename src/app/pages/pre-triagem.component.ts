import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';
import { CalendarModule } from 'primeng/calendar';
import { TriagemService } from '../services/triagem.service';
import { Triagem } from '@Types/triagem.type';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, CalendarModule],
  templateUrl: 'pre-triagem.component.html',
  styleUrl: 'pre-triagem.component.scss',
})
export class PreTriagemComponent {
  private triagemService = inject(TriagemService);
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
  });

  onSubmit() {
    if (this.form.valid) {
      const request: Triagem = {
        ...this.form.getRawValue(),
        altura: parseFloat(
          `${this.form.controls.altura.value.replace(',', '.')}`
        ),
        peso: parseFloat(`${this.form.controls.peso.value.replace(',', '.')}`),
        data_nascimento:
          this.form.controls.data_nascimento.value!.getFullYear() +
          '-' +
          (this.form.controls.data_nascimento.value!.getMonth() + 1) +
          '-' +
          this.form.controls.data_nascimento.value!.getDate(),
      };
      this.triagemService.addTriagem(request);
    }
  }
}
