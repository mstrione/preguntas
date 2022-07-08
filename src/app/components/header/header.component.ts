import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  gameId: string | any;
  lang: string | any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
    this.lang = this.route.snapshot.paramMap.get('lang');
  }

  navigateToGames() {
    this.router.navigate(['/games/' + this.lang]);
  }

  setLang (lang: string) {

    let url = this.router.url;

   if (this.route.snapshot.url[0].path==='games') {
    url = '/games/' + lang;
   } else {
    url = '/board/' + this.gameId + '/' + lang;
   }
   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {this.router.navigate([url]);});

  }

  reloadCurrentPage() {
    window.location.reload();
   }

}
