import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TriagemService } from '@Services/triagem.service';

export const triagemFeedbackGuard: CanActivateFn = (route, state) => {
  return inject(TriagemService).getTriagemResponse()() !== null
    ? true
    : inject(Router).navigate(['/', 'pre-triagem']);
};
