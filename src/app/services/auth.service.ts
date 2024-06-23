import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, of, take } from 'rxjs';

import { environment } from '@Environments/environment';
import { AuthResponse } from '@Types/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'auth/';
  private token = signal<string | null>(null);

  constructor() {
    const authSession = sessionStorage.getItem('x-auth');
    if (authSession) this.token.set(authSession);

    this.http
      .get(this.path + 'user', { headers: { 'x-auth': this.token() ?? '' } })
      .pipe(
        take(1),
        catchError(() => of(null))
      )
      .subscribe((res) => {
        if (res === null) {
          sessionStorage.clear();
        }
      });
  }

  login(form: Partial<{ email: string; password: string }>) {
    return this.http
      .post<AuthResponse>(this.path + 'login', form)
      .pipe(take(1))
      .subscribe((res) => {
        sessionStorage.setItem('x-auth', res.data.session);
        this.token.set(res.data.session);
        this.router.navigate(['/', 'doctor']);
      });
  }

  logout() {
    return this.http
      .get(this.path + 'logout')
      .pipe(take(1))
      .subscribe(() => {
        sessionStorage.clear();
        this.token.set(null);
        this.router.navigate(['/', 'doctor', 'login']);
      });
  }

  isLogged() {
    return this.token() ? true : false;
  }

  getAuthHeader(): HttpHeaders {
    if (this.token()) return new HttpHeaders({ 'x-auth': this.token()! });
    return new HttpHeaders({});
  }
}
