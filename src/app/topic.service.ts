import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Topic } from './topic';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  httpOptions = {
    header: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private url = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) {}

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getTopic(id: number): Observable<Topic> {
    return this.http
      .get<Topic>(`${this.url}/item/${id}.json?print=pretty`)
      .pipe(catchError(this.handleError<any>([])));
  }

  // GET Topics
  getTopics(): Observable<number[]> {
    return this.http
      .get<number[]>(`${this.url}/askstories.json?print=pretty`)
      .pipe(catchError(this.handleError<any>([])));
  }
}
