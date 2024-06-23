import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  styleUrl: 'cover.component.scss',
  template: `
    <img
      ngSrc="assets/svg/triagem_illustration.svg"
      height="160"
      width="160"
      alt="Triagem Virtual"
      priority
    />
    <h1>Health Solutions Architects</h1>
    <div class="actions">
      <a routerLink="/doctor/login"> Equipe Médica </a>
      <a routerLink="/pacient/login"> Acesso do Paciente </a>
      <a routerLink="triagem"> Triagem </a>
    </div>
  `,
})
export class CoverComponent {}
