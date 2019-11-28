import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Store } from '../common/store.service';
import { Bug } from './bug.model';


@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  bugs$: Observable<Bug[]>;

  constructor(
    private store: Store
  ) {
   }

  ngOnInit() {
    this.store.init();
    this.bugs$ = this.store.bugs$.pipe(
      filter(data => data.length !== 0),
    );

}
}
