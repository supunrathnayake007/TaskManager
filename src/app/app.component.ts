import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavComponent } from './app-nav/app-nav.component';

@Component({
  selector: 'tma-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, AppNavComponent],
})
export class AppComponent {
  title = 'TaskManager';
}
