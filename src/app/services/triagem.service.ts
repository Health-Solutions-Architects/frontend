import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, of, take } from 'rxjs';

import { environment } from '@Environments/environment';
import { AuthService } from './auth.service';
import {
  PreTriagemResponse,
  Triagem,
  TriagemResponse,
} from '@Types/triagem.type';

@Injectable({
  providedIn: 'root',
})
export class TriagemService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private readonly path = environment.apiUrl + 'pre-triagem';

  triagemResponse = signal<{
    response: TriagemResponse;
    pacient: Triagem;
  } | null>(null);

  getPreTriagemByCpf(cpf: string) {
    return this.http
      .get<PreTriagemResponse>(this.path + `/${cpf}`, {
        headers: this.authService.getAuthHeader(),
      })
      .pipe(catchError(() => of(null)));
  }

  finishTriagem(form: any) {
    return this.http
      .post(environment.apiUrl + 'triagem', form, {
        headers: this.authService.getAuthHeader(),
      })
      .subscribe((res) => console.log(res));
  }

  addTriagem(form: Triagem) {
    return this.http
      .post<TriagemResponse>(this.path, form)
      .pipe(take(1))
      .subscribe((res) => {
        this.router.navigate(['/', 'triagem-feedback']);
        this.triagemResponse.set({
          response: {
            message: res.message,
            data: {
              ...res.data,
              cor: res.data.cor.toLocaleLowerCase(),
            },
          },
          pacient: form,
        });
      });
  }

  getTriagemResponse() {
    return this.triagemResponse.asReadonly();
  }

  clearTriagemResponse() {
    this.triagemResponse.set(null);
  }
}
