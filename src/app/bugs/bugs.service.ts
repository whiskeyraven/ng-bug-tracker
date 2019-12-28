import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Bug } from './bug.model';

const BACKEND_URL = environment.apiUrl + '/bugs/';

@Injectable({
  providedIn: 'root'
})
export class BugsService {
  sort: any;



}
