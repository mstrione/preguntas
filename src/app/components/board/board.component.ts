import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  cards: any;
  lang: string | any;
  
  constructor(private questionsService : QuestionsService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.lang = this.route.snapshot.paramMap.get('lang')

    this.questionsService.getJSON(this.lang).subscribe(data => {
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
