import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { QuestionsService } from '../../services/questions.service';
import { HeaderComponent } from '../header/header.component';
import { DECKS, DeckMeta, boardImg, deckNum } from '../../data/decks';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  decks = DECKS;
  lang = 'es';
  counts: Record<number, number> = {};

  boardImg = boardImg;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.lang = this.route.snapshot.paramMap.get('lang') || 'es';
    this.loadCounts();
  }

  private loadCounts(): void {
    const requests = this.decks.map(d =>
      this.questionsService.getJSON(deckNum(d.id), this.lang).pipe(
        map(data => ({ id: d.id, count: Array.isArray(data) ? data.length : 0 })),
        catchError(() => of({ id: d.id, count: 0 }))
      )
    );
    forkJoin(requests).subscribe(results => {
      const next: Record<number, number> = {};
      for (const r of results) { next[r.id] = r.count; }
      this.counts = next;
    });
  }

  play(deck: DeckMeta): void {
    this.router.navigate(['/board', deckNum(deck.id), this.lang]);
  }

}
