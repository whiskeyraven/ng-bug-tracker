import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
// import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Bug } from './bug.model';

const BACKEND_URL = environment.apiUrl + '/bugs/';

@Injectable({
  providedIn: 'root'
})
export class BugsService {
  sort: any;

  constructor(
    private http: HttpClient,
    // private router: Router
  ) { }

  getAllBugs() {
    return this.http.get<{message: string; bugs: Bug[]}>(BACKEND_URL)
      .pipe(
        map(bugsData => bugsData.bugs),
        tap(bugsData => console.log(bugsData))
      );

  }
}
