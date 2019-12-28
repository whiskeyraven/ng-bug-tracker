import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BugsService } from './bugs.service';
import { tap } from 'rxjs/operators';

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
bugNeeded = '5de3627fd18e883fb434ae60';

  constructor(
    private bugsService: BugsService,
    private store: Store
  ) {}

  //bugs$: Observable<Bug[]> = this.bugsService.getAllBugs();
  // bug$: Observable<Bug[]> = this.bugsService.getBugById(this.bugNeeded).pipe(
  //   tap (bug => (console.log('bug ' + this.bug$))),
  //   filter(bug => this.bug$[this.bugNeeded] === this.bugNeeded )
  // );
  ngOnInit() {
    this.store.init();
    this.bugs$ = this.store.bugs$.pipe(
      filter(data => data.length !== 0),
    );
  }
}
