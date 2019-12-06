import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { element } from 'protractor';


export interface PeriodicElement {
  id: number;
  title: string;
  severity: string;
  priority: string;
  status: string;
  type: string;
  shortDesc: string;
  owner: string;
  fixer: string;
  date: string;
  view: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    title: 'Hydrogen',
    severity: 'critical',
    priority: '1st',
    status: 'defined',
    type: 'cosmetic',
    shortDesc:  'Page does not align correctly',
    owner: 'Bob Thompson',
    fixer: 'Eric Swanson',
    date: '06/06/2020',
    view: 'view'
  },
  {
    id: 2,
    title: 'test',
    severity: 'major',
    priority: '2nd',
    status: 'fixing',
    type: 'functional',
    shortDesc:  'Page does not align Page does not align correctly	Page does not align correctly	',
    owner: 'Bob Thomason',
    fixer: 'Derick Swanson',
    date: '06/07/2020',
    view: 'view'
  },
  {
    id: 3,
    title: 'testickles',
    severity: 'minor',
    priority: '3rd',
    status: 'texting',
    type: 'functional',
    shortDesc:  'Page does align',
    owner: 'Bob Thomasons',
    fixer: 'Derick Swansons',
    date: '06/05/2020',
    view: 'view'
  },
  {
    id: 15,
    title: 'Brian',
    severity: '11',
    priority: '1st',
    status: 're-testing',
    type: 'a11y',
    shortDesc:  'Page does ',
    owner: 'Henry Jacobson',
    fixer: 'Bigus Dickus',
    date: '06/06/2020',
    view: 'view'
  }
];

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'title', 'severity', 'priority', 'status', 'type', 'shortDesc', 'owner', 'fixer', 'date', 'view'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() {
   }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  viewBug = (id: number) => {
    console.log('view bug clicked: ' + id);
  }
}

