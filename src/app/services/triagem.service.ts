import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

import { environment } from '@Environments/environment';
import { Triagem, TriagemResponse } from '@Types/triagem.type';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TriagemService {
  private router = inject(Router);
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl + 'pre-triagem';

  triagemResponse = signal<{
    response: TriagemResponse;
    pacient: Triagem;
  } | null>(null);

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
