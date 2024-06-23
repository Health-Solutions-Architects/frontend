import { TriagemService } from '@Services/triagem.service';
import { Component, OnDestroy, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: 'pre-triagem-feedback.component.html',
  styleUrl: 'pre-triagem-feedback.component.scss',
})
export class PreTriagemFeedbackComponent implements OnDestroy {
  private triagemService = inject(TriagemService);
  protected triagemResponse = this.triagemService.getTriagemResponse();

  ngOnDestroy() {
    this.triagemService.clearTriagemResponse();
  }
}
