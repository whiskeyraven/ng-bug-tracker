import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Bug } from './bug.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Store } from '../common/store.service';

const BACKEND_URL = environment.apiUrl + '/bugs/';

@Injectable({
  providedIn: 'root'
})
export class BugsService {

  constructor(
    private http: HttpClient,
    private store: Store
  ) { }

  createBug(newBug) {
    return this.http.post<{ message: string, bug: Bug }>(BACKEND_URL, newBug).pipe(
      tap(data => console.log('response data', data.bug)),
      map(response => response.bug)
    )
    .subscribe(responseBug => {
      this.store.addBug(responseBug);
    });
  }

}
