import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { element } from 'protractor';


export interface PeriodicElement {
  id: number;
  title: string;
  severity: object;
  priority: object;
  status: object;
  type: object;
  shortDesc: string;
  owner: object;
  fixer: object;
  date: object;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    title: 'Hydrogen',
    severity: { severity: 'critical' },
    priority: { priority: '1st' },
    status: { status: 'defined' },
    type: { type: 'cosmetic' },
    shortDesc:  'Page does not align correctly',
    owner: { owner: 'Bob Thompson' },
    fixer: { first: 'Tina Johnson', second: 'Eric Swanson' },
    date: { date: '06/06/2020' }
  },
  {
    id: 2,
    title: 'Test',
    severity: { severity: 'critical' },
    priority: { priority: '1st' },
    status: { status: 'defined' },
    type: { type: 'cosmetic' },
    shortDesc:  'Test',
    owner: { owner: 'Bob Thompson' },
    fixer: { second: 'Tina Johnson', first: 'Eric Swanson' },
    date: { date: '06/06/2020' }
  }
  // {id: 2, title: 'Helium', severity: 'major', priority: '2nd'},
  // {id: 3, title: 'Lithium', severity: 'moderate', priority: '3rd'},
  // {id: 4, title: 'Beryllium', severity: 'minor', priority: '4th'},
  // {id: 5, title: 'Boron', severity: 'WTF', priority: '11'},
  // {id: 6, title: 'Carbon', severity: 'moderate', priority: '3rd'},
  // {id: 7, title: 'Nitrogen', severity: 'moderate', priority: '3rd'},
  // {id: 8, title: 'Oxygen', severity: 'moderate', priority: '3rd'},
  // {id: 9, title: 'Fluorine', severity: 'moderate', priority: '3rd'},
  // {id: 10, title: 'Neon', severity: 'moderate', priority: '3rd'},
];

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'title', 'severity', 'priority', 'status', 'type', 'shortDesc', 'owner', 'fixer', 'date'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.sort = this.sort;
  }

}

