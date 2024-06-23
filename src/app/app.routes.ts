import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { loggedGuard } from './guard/logged.auth';
import { triagemFeedbackGuard } from './guard/triagem-feedback.guard';

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
        canActivate: [authGuard],
      },
      {
        path: 'login',
        loadComponent: () =>
          import('@Pages/doctor-login.component').then(
            (c) => c.DoctorLoginComponent
          ),
        canActivate: [loggedGuard],
      },
      {
        path: 'queue',
        loadComponent: () =>
          import('@Pages/doctor-queue.component').then(
            (c) => c.DoctorQueueComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'triagem',
        loadComponent: () =>
          import('@Pages/doctor-triagem.component').then(
            (c) => c.DoctorTriagemComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'treatment',
        loadComponent: () =>
          import('@Pages/doctor-treatment.component').then(
            (c) => c.DoctorTreatmentComponent
          ),
        canActivate: [authGuard],
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
    canActivate: [triagemFeedbackGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
