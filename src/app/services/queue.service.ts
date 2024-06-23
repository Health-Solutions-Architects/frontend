import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@Environments/environment';

import { FilaResponse } from '@Types/fila.type';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private http = inject(HttpClient);
  private authService = inject(AuthService);
  private path = environment.apiUrl + 'fila';

  getQueue() {
    return this.http.get<FilaResponse>(this.path, {
      headers: this.authService.getAuthHeader(),
    });
  }
}
