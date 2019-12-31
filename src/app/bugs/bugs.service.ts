import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Bug } from './bug.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

const BACKEND_URL = environment.apiUrl + '/bugs/';

@Injectable({
  providedIn: 'root'
})
export class BugsService {
  sort: any;
  constructor(private http: HttpClient) { }

  createBug(newBug: Bug) {
    console.log(newBug, ' in service');
    return this.http.post<{ message: string, bug: Bug }>(BACKEND_URL, newBug).pipe(
      tap(data => console.log('response data', data)),
      map(response => response.bug)
    );
  }

}
