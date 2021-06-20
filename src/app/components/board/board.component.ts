import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  cards: any;

  constructor(private questionsService : QuestionsService) {}

  ngOnInit(): void {

    this.questionsService.getJSON().subscribe(data => {
      console.log(data);
      this.cards = this.shuffleArray(data);
    });
  }

  shuffleArray (array:any) {
    var m = array.length, t, i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }

}
