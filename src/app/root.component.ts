import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hsa-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './root.component.html',
})
export class RootComponent {}
