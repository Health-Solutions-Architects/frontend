import { NavbarComponent } from '@Components/navbar.component';
import { QueueService } from '@Services/queue.service';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage, NavbarComponent],
  templateUrl: 'doctor-queue.component.html',
  styleUrl: 'doctor-queue.component.scss',
})
export class DoctorQueueComponent {
  private queueService = inject(QueueService);
  protected queue = this.queueService.getQueue();
}
