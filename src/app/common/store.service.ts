import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Bug } from '../bugs/bug.model';

const BACKEND_URL = environment.apiUrl + '/bugs/';

@Injectable({
  providedIn: 'root'
})
export class Store {
  private bugs: Bug[];
  private state$ = new BehaviorSubject<Bug[]>([]);
  bugs$: Observable<Bug[]> = this.state$.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  init() {
    return this.http.get<{ message: string; bugs: Bug[] }>(BACKEND_URL).pipe(
      map(response => response.bugs),
    ).subscribe(bugs => {
      this.bugs = bugs;
      this.state$.next(bugs);
    });
  }

  addBug(bug) {
    const state = [bug, ...this.state$.value];
    this.bugs = [...state];
    this.state$.next(state);
  }

}
