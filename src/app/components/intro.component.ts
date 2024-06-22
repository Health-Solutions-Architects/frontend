import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'hsa-intro',
  standalone: true,
  imports: [NgOptimizedImage],
  styleUrl: 'intro.component.scss',
  template: `
    <img
      ngSrc="assets/svg/triagem_illustration.svg"
      height="160"
      width="160"
      alt="Triagem Virtual"
      priority
    />
    <h1>Health Solutions Architects</h1>
  `,
})
export class IntroComponent {}
