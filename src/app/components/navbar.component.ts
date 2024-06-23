import { AuthService } from '@Services/auth.service';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hsa-navbar',
  imports: [RouterLink, NgOptimizedImage],
  standalone: true,
  templateUrl: 'navbar.component.html',
  styleUrl: 'navbar.component.scss',
})
export class NavbarComponent {
  private authService = inject(AuthService);

  logoutHandler() {
    this.authService.logout();
  }
}
