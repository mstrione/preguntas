import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) {}

  public getJSON(gameId: string, lang: string): Observable<any> {
    if (lang !== 'en') {
      return this.http.get('./assets/' + gameId + '/default.json');
    } else {
      return this.http.get('./assets/' + gameId + '/default-en.json');
    }
  }

}
