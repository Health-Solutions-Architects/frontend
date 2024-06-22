import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('@Pages/cover.component').then((c) => c.CoverComponent),
  },
  {
    path: 'doctor',
    loadComponent: () =>
      import('@Pages/doctor-root.component').then((c) => c.DoctorRootComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@Pages/doctor-login.component').then(
            (c) => c.DoctorLoginComponent
          ),
      },
    ],
  },
  {
    path: 'pacient',
    loadComponent: () =>
      import('@Pages/pacient-root.component').then(
        (c) => c.PacientRootComponent
      ),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('@Pages/pacient-login.component').then(
            (c) => c.PacientLoginComponent
          ),
      },
    ],
  },
  {
    path: 'triagem',
    loadComponent: () =>
      import('@Pages/triagem.component').then((c) => c.TriagemComponent),
  },
  {
    path: 'triagem-feedback',
    loadComponent: () =>
      import('@Pages/triagem-feedback.component').then(
        (c) => c.TriagemFeedbackComponent
      ),
  },
];
