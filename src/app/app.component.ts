import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChartsViewComponent } from './charts-view/charts-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartsViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'line-charts-app';
}
