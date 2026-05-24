import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preguntas';

  constructor(private theme: ThemeService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  }
}
