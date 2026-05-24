import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'comp-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  screen: 'home' | 'game' = 'home';
  gameId = '';
  lang = 'es';

  private sub?: Subscription;

  constructor(private router: Router, public theme: ThemeService) { }

  setLang(target: 'es' | 'en'): void {
    if (this.lang === target) { return; }
    this.toggleLang();
  }

  ngOnInit(): void {
    this.parse(this.router.url);
    this.sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.parse(e.urlAfterRedirects));
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private parse(url: string): void {
    const segs = url.split('?')[0].split('/').filter(Boolean);
    if (segs[0] === 'board' && segs.length >= 3) {
      this.screen = 'game';
      this.gameId = segs[1];
      this.lang = segs[2] || 'es';
    } else {
      this.screen = 'home';
      this.lang = segs[1] || 'es';
    }
  }

  goHome(): void {
    this.router.navigate(['/games', this.lang]);
  }

  toggleLang(): void {
    const next = this.lang === 'es' ? 'en' : 'es';
    const url = this.screen === 'game'
      ? `/board/${this.gameId}/${next}`
      : `/games/${next}`;
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigateByUrl(url));
  }

}
