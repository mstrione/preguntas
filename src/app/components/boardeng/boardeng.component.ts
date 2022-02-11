import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-boardeng',
  templateUrl: './boardeng.component.html',
  styleUrls: ['./boardeng.component.scss']
})
export class BoardengComponent implements OnInit {

  cards: any;
  lang: string | any;
  
  constructor(private questionsService : QuestionsService, private route: ActivatedRoute) {}

  ngOnInit(): void {

    //this.lang = this.route.snapshot.paramMap.get('lang');
    this.lang = 'en';

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
