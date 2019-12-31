import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

import { Bug } from './../bugs/bug.model';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  @Input() bugs$: Observable<Bug[]>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = [ 'id', 'title', 'severity', 'priority', 'status', 'type', 'description', 'owner', 'fixer', 'date', 'view'];
  dataSource: MatTableDataSource<Bug> = new MatTableDataSource([]);

  constructor() { }

  ngOnInit() {
    this.bugs$.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }
  viewBug = (id: number) => {
    console.log('view bug clicked: ' + id);
  }


}

