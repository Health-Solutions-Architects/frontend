import { Injectable, inject } from '@angular/core';
import { environment } from '@Environments/environment';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TriagemService {
  private http = inject(HttpClient);
  private readonly path = environment.apiUrl;

  addTriagem(form: unknown) {
    return this.http.post<unknown>(this.path, form);
  }
}
