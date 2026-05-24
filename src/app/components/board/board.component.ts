import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { CardModalComponent } from '../card-modal/card-modal.component';
import { DeckMeta, Question, getDeck } from '../../data/decks';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardComponent, CardModalComponent],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  deck?: DeckMeta;
  gameId = '';
  lang = 'es';

  questions: Question[] = [];
  seen: Record<number, boolean> = {};
  expandedIndex: number | null = null;
  resetting = false;

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId') || '';
    this.lang = this.route.snapshot.paramMap.get('lang') || 'es';
    this.deck = getDeck(this.gameId);

    if (!this.deck) {
      this.router.navigate(['/games', this.lang]);
      return;
    }

    this.seen = this.loadSeen();

    this.questionsService.getJSON(this.gameId, this.lang).subscribe(data => {
      this.questions = this.shuffle(Array.isArray(data) ? data : []);
    });
  }

  private get storageKey(): string { return `nq-seen-${this.deck?.id}`; }

  private loadSeen(): Record<number, boolean> {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '{}') || {};
    } catch {
      return {};
    }
  }

  private save(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.seen));
  }

  private shuffle(array: Question[]): Question[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  get total(): number { return this.questions.length; }

  get doneN(): number {
    return Object.values(this.seen).filter(Boolean).length;
  }

  get pct(): number {
    return this.total ? (this.doneN / this.total) * 100 : 0;
  }

  open(i: number): void {
    if (!this.seen[this.questions[i].id]) {
      this.expandedIndex = i;
    }
  }

  close(): void {
    if (this.expandedIndex !== null) {
      this.seen = { ...this.seen, [this.questions[this.expandedIndex].id]: true };
      this.save();
    }
    this.expandedIndex = null;
  }

  reset(): void {
    this.resetting = true;
    setTimeout(() => {
      this.seen = {};
      localStorage.removeItem(this.storageKey);
      this.questions = this.shuffle(this.questions);
      setTimeout(() => (this.resetting = false), 50);
    }, 280);
  }

}
