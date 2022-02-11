import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'comp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reload() {
    console.log('holis');
    this.router.navigate(['/board']);
  }

  reloadCurrentPage() {
    window.location.reload();
   }

}
