import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Bug } from '../bugs/bug.model';

const BACKEND_URL = environment.apiUrl + '/bugs/';

@Injectable({
  providedIn: 'root'
})
export class Store {
  private subject = new BehaviorSubject<Bug[]>([]);
  bugs$: Observable<Bug[]> = this.subject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  init() {
    return this.http.get<{ message: string; bugs: Bug[] }>(BACKEND_URL).pipe(
      map(response => response.bugs),
    ).subscribe(bugs => {
      this.subject.next(bugs);
    });
  }

}
