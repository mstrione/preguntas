import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckMeta, Question, backImg, cardImg } from '../../data/decks';

@Component({
  selector: 'comp-card-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss']
})
export class CardModalComponent implements OnInit, OnDestroy {
  @Input() deck!: DeckMeta;
  @Input() num = 0;
  @Input() question!: Question;
  @Input() lang = 'es';

  @Output() closed = new EventEmitter<void>();

  flipped = false;
  out = false;
  w = 360;
  h = 540;

  private flipTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.resize();
    this.flipTimer = setTimeout(() => (this.flipped = true), 180);
  }

  ngOnDestroy(): void {
    if (this.flipTimer) { clearTimeout(this.flipTimer); }
  }

  @HostListener('window:resize')
  resize(): void {
    const ratio = 1.5; // card is 2:3 (h = w * 1.5)
    const maxW = window.innerWidth - 32;
    const maxH = window.innerHeight - 72;
    let h = maxH;
    let w = h / ratio;
    if (w > maxW) {
      w = maxW;
      h = w * ratio;
    }
    this.w = Math.round(w);
    this.h = Math.round(h);
  }

  @HostListener('document:keydown.escape')
  close(): void {
    if (this.out) { return; }
    this.out = true;
    setTimeout(() => this.closed.emit(), 220);
  }

  get backImg(): string { return backImg(this.deck.id); }
  get cardImg(): string { return cardImg(this.deck.id, this.question.id); }
}
