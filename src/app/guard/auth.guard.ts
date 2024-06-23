import { AuthService } from '@Services/auth.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthService).isLogged()
    ? true
    : inject(Router).navigate(['/', 'doctor', 'login']);
};
