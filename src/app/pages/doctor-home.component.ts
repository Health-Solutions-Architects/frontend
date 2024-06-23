import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  styleUrl: 'doctor-home.component.scss',
  template: `
    <h1>Processos</h1>
    <div class="actions">
      <a routerLink="queue">Lista de Espera</a>
      <a routerLink="">Triagem</a>
      <a routerLink="">Atendimentos</a>
    </div>
  `,
})
export class DoctorHomeComponent {}
