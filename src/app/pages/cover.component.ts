import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
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
  `,
})
export class CoverComponent implements OnInit {
  private router = inject(Router);

  ngOnInit() {
    setTimeout(() => this.router.navigate(['/', 'triagem']), 4000);
  }
}
