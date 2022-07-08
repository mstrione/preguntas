import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { CardData } from 'src/app/model/cardData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comp-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})

export class CardComponent implements OnInit {
  @Input() cardNumber: number | undefined;
  @Input() id: number | undefined;
  @Input() text: string | undefined;
  
  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };

  gameId: string | any;
  lang: string | any;

  constructor( private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
    this.lang = this.route.snapshot.paramMap.get('lang');
  }

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}
