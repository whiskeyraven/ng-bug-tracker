import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { element } from 'protractor';
import { tap, map } from 'rxjs/operators';
import { Bug } from './../bugs/bug.model';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  @Input() bugs: Bug[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  displayedColumns: string[] = [ 'id', 'title', 'severity', 'priority', 'status', 'type', 'description', 'owner', 'fixer', 'date', 'view'];
  dataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.bugs);
    this.dataSource.sort = this.sort;

  }
  viewBug = (id: number) => {
    console.log('view bug clicked: ' + id);
  }


}

