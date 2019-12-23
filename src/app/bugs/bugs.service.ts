import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/bugs/';

@Injectable({
  providedIn: 'root'
})
export class BugsService {



}
