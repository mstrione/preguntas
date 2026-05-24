import { Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  theme: Theme = 'dark';

  constructor() {
    const saved = (localStorage.getItem('nq-theme') as Theme) || 'dark';
    this.apply(saved);
  }

  apply(theme: Theme): void {
    this.theme = theme;
    document.documentElement.classList.toggle('light', theme === 'light');
    localStorage.setItem('nq-theme', theme);
  }

  toggle(): void {
    this.apply(this.theme === 'light' ? 'dark' : 'light');
  }
}
