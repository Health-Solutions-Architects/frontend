import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/cover.component').then((c) => c.CoverComponent),
  },
  {
    path: 'triagem',
    loadComponent: () =>
      import('./pages/triagem.component').then((c) => c.TriagemComponent),
  },
  {
    path: 'triagem-feedback',
    loadComponent: () =>
      import('./pages/triagem-feedback.component').then(
        (c) => c.TriagemFeedbackComponent
      ),
  },
];
