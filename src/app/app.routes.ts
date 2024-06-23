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
        path: '',
        pathMatch: 'prefix',
        loadComponent: () =>
          import('@Pages/doctor-home.component').then(
            (c) => c.DoctorHomeComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('@Pages/doctor-login.component').then(
            (c) => c.DoctorLoginComponent
          ),
      },
      {
        path: 'queue',
        loadComponent: () =>
          import('@Pages/doctor-queue.component').then(
            (c) => c.DoctorQueueComponent
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
    path: 'pre-triagem',
    loadComponent: () =>
      import('@Pages/pre-triagem.component').then((c) => c.PreTriagemComponent),
  },
  {
    path: 'triagem-feedback',
    loadComponent: () =>
      import('@Pages/pre-triagem-feedback.component').then(
        (c) => c.PreTriagemFeedbackComponent
      ),
  },
];
