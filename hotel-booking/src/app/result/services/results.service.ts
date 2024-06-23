import { Injectable } from '@angular/core';
import { BehaviorSubject, map, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  hotelResultsData$: any = new BehaviorSubject([]);
  resultUrl: String = 'http://localhost:3000/result';
  constructor(private http: HttpClient) {}
  getResults() {
    this.http
      .get(`${this.resultUrl}`)
      .pipe(
        map((resp) => {
          return resp;
        }),
        retry({ count: 2, delay: 2000 })
      )
      .subscribe((hotelsData) => {
        this.hotelResultsData$.next(hotelsData);
      });
    return this.hotelResultsData$;
  }
}
