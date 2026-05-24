import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckMeta, backImg, cardImg } from '../../data/decks';

@Component({
  selector: 'comp-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() deck!: DeckMeta;
  @Input() num = 0;
  @Input() qid = 0;
  @Input() seen = false;

  @Output() expand = new EventEmitter<void>();

  get backImg(): string { return backImg(this.deck.id); }
  get cardImg(): string { return cardImg(this.deck.id, this.qid); }

  onClick(): void {
    if (!this.seen) { this.expand.emit(); }
  }
}
