import {Component, OnInit} from '@angular/core';
import { element } from 'protractor';
import { BugsService } from './bugs.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Bug } from './bug.model';


// export interface Bug {
//   id: number;
//   title: string;
//   severity: string;
//   priority: string;
//   status: string;
//   type: string;
//   description: string;
//   owner: string;
//   fixer: string;
//   date: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     id: 1,
//     title: 'Hydrogen',
//     severity: 'critical',
//     priority: '1st',
//     status: 'defined',
//     type: 'cosmetic',
//     shortDesc:  'Page does not align correctly',
//     owner: 'Bob Thompson',
//     fixer: 'Eric Swanson',
//     date: '06/06/2020',
//   },
//   {
//     id: 2,
//     title: 'long name for truncate test you git',
//     severity: 'major',
//     priority: '2nd',
//     status: 'fixing',
//     type: 'functional',
//     shortDesc:  'Page does not align Page does not align correctly	Page does not align correctly	',
//     owner: 'Bob Thomason',
//     fixer: 'Derick Swanson',
//     date: '06/07/2020',
//   },
//   {
//     id: 3,
//     title: 'testickles',
//     severity: 'minor',
//     priority: '3rd',
//     status: 'texting',
//     type: 'functional',
//     shortDesc:  'Page does align',
//     owner: 'Bob Thomasons',
//     fixer: 'Derick Swansons',
//     date: '06/05/2020',
//   },
//   {
//     id: 15,
//     title: 'Brian',
//     severity: '11',
//     priority: '1st',
//     status: 're-testing',
//     type: 'a11y',
//     shortDesc:  'Page does ',
//     owner: 'Henry Jacobson',
//     fixer: 'Bigus Dickus Johnson III ESQ kjkj fkdj dkjkdjk dk k dkjjdk jkjdj',
//     date: '06/06/2020',
//   }
// ];

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss']
})
export class BugsComponent implements OnInit {
  bugs$: Observable<Bug[]> = this.bugsService.getAllBugs();
  constructor(private bugsService: BugsService) {
   }

  ngOnInit() {
  }
}

