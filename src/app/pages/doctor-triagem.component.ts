import { NavbarComponent } from '@Components/navbar.component';
import { TriagemService } from '@Services/triagem.service';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NgxMaskDirective } from 'ngx-mask';
import { CalendarModule } from 'primeng/calendar';
import { Subscription, of, switchMap } from 'rxjs';

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
export class DoctorTriagemComponent implements OnInit, OnDestroy {
  private fb = inject(NonNullableFormBuilder);
  private triagemService = inject(TriagemService);
  protected form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(5)]],
    cpf: ['', [Validators.required]],
    peso: ['', [Validators.required, Validators.max(250), Validators.min(0)]],
    altura: ['', [Validators.required, Validators.max(2.8), Validators.min(0)]],
    data_nascimento: this.fb.control<Date | null>(null, [Validators.required]),
    classificacao: ['', [Validators.required]],
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
    parecer: ['', [Validators.required, Validators.minLength(15)]],
  });

  cpfStatus!: Subscription;

  ngOnInit() {
    this.cpfStatus = this.form.controls.cpf.statusChanges
      .pipe(
        switchMap((status) => {
          return status === 'VALID'
            ? this.triagemService.getPreTriagemByCpf(
                this.form.controls.cpf.value
              )
            : of(null);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.form.controls.nome.setValue(res.data.nome);
          this.form.controls.data_nascimento.setValue(
            new Date(res.data.data_nascimento)
          );
          this.form.controls.peso.setValue(
            res.data.peso.toString().replace('.', ',')
          );
          this.form.controls.altura.setValue(
            res.data.altura.toString().replace('.', ',')
          );
          this.form.controls.sintomas.setValue(res.data.sintomas.toString());
          this.form.controls.classificacao.setValue(
            res.data.response_gpt.nivel.toString()
          );
        }
      });
  }

  ngOnDestroy() {
    this.cpfStatus.unsubscribe();
  }

  onSubmit() {
    this.triagemService.finishTriagem(this.form.value);
  }
}
