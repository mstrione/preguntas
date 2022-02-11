import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) {
    //this.getJSON().subscribe(data => {
    //    console.log(data);
    //});
}

public getJSON(_lang: undefined): Observable<any> {
    if (_lang!=='en') {
      return this.http.get("./assets/default.json");
    } else {
      return this.http.get("./assets/default-en.json");
    }
    
}

}
