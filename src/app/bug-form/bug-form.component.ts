import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Form, Validators, FormControl } from '@angular/forms';
import { Severity, Priority, Status, BugType, Owner, Fixer, Date } from './bug-form.model';
import { Bug } from '../bugs/bug.model';
import { isDefined } from '@angular/compiler/src/util';
import { debounceTime, tap } from 'rxjs/operators' ;
import { BugsService } from './../bugs/bugs.service';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.scss']
})
export class BugFormComponent implements OnInit {


  constructor(private fb: FormBuilder, private bugsService: BugsService) { }
  bugFormTitle: string;
  bugFormFriendlyId: string;
  isEdit = true;
  submitted = false;

  severity: Severity[] = [
    {name: 'critical', id: 'critical', value: 'Critical'},
    {name: 'major', id: 'major', value: 'Major'},
    {name: 'moderate', id: 'moderate', value: 'Moderate'},
    {name: 'minor', id: 'minor', value: 'Minor'},
    {name: 'WTF', id: 'WTF', value: 'WTF'}
  ];
  priorities: Priority[] = [
    {name: '1st', id: '1st', value: '1st'},
    {name: '2nd', id: '2nd', value: '2nd'},
    {name: '3rd', id: '3rd', value: '3rd'},
    {name: '4th', id: '4th', value: '4th'},
    {name: '5th', id: '5th', value: 'WTF'},
    {name: 'zoop', id: 'zoop', value: 'zoop'}
  ];
  status: Status[] = [
    {name: 'Defined', id: 'Defined', value: 'Defined' },
    {name: 'tested', id: 'tested', value: 'Tested'},
    {name: 'fixing', id: 'fixing', value: 'Fixing'},
    {name: 're-test', id: 're-test', value: 'Re-test'},
    {name: 're-Opened', id: 're-Opened', value: 'Re-opened'},
    {name: 'no-repro', id: 'no-repro', value: 'No-Repro'},
    {name: 'duplicate', id: 'duplicate', value: 'Duplicate'},
    {name: 'accepted', id: 'accepted', value: 'Accepted'},
    {name: 'rejected', id: 'rejected', value: 'Rejected'},
    {name: 'closed', id: 'closed', value: 'Closed'}
  ];
  types: BugType[] = [
    {name: 'cosmetic', id: 'cosmetic', value: 'Cosmetic'},
    {name: 'functional', id: 'functional', value: 'Functional'},
    {name: 'accessibility', id: 'accessibility', value: 'Accessibility'}
  ];
  owners: Owner[] = [
    {name: 'critical', id: 'critical', value: 'Critical'},
    {name: 'major', id: 'major', value: 'Major'},
    {name: 'moderate', id: 'moderate', value: 'Moderate'},
    {name: 'minor', id: 'minor', value: 'Minor'},
    {name: 'WTF', id: 'WTF', value: 'WTF'}
  ];
  fixers: Fixer[] = [
    {name: 'critical', id: 'critical', value: 'Critical'},
    {name: 'major', id: 'major', value: 'Major'},
    {name: 'moderate', id: 'moderate', value: 'Moderate'},
    {name: 'minor', id: 'minor', value: 'Minor'},
    {name: 'WTF', id: 'WTF', value: 'WTF'}
  ];
  date: Date[] = [
    {value: '12/12/19', name: '11/11/19', id: '11/11/19'},
  ];
  @Input() bug: Bug;

  bugForm = new FormGroup ({
    title: new FormControl('', [Validators.required]),
    severity: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    owner: new FormControl('', [Validators.required]),
    fixer: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    if (this.isEdit) {
    this.bugForm.controls.title.setValue(this.bug.title);
    this.bugForm.controls.severity.setValue(this.bug.severity);
    this.bugForm.controls.priority.setValue(this.bug.priority);
    this.bugForm.controls.status.setValue(this.bug.status);
    this.bugForm.controls.type.setValue(this.bug.type);
    this.bugForm.controls.description.setValue(this.bug.description);
    this.bugForm.controls.owner.setValue(this.bug.owner);
    this.bugForm.controls.fixer.setValue(this.bug.fixer);
    this.bugForm.controls.date.setValue(this.bug.date);
    this.bugFormTitle = this.bug.title;
   }
  //   this.bugForm.valueChanges.pipe(
  //   debounceTime(300),
  //   tap(value => console.log('form input' + value))
  //  ).subscribe();
  }


 onSubmit(bugForm) {
       console.log('bugForm', bugForm.value);
       const newBug = { ...bugForm.value};
       console.log(newBug, 'new bug');
       this.bugsService.createBug(newBug);
             //  const newBug = { ...bugForm.value };
      //  this.bugsService.createBug(newBug);
  //  console.log('severity', value);
//  console.log(this.bugForm.get('title' as 'title').value, this.bugForm.valid + ' old test');
//  console.log(this.bugForm.value.Severity + ' value');
//  console.log(this.bugForm + ' bugForm');
//  console.log(this.bugForm.controls + ' controls');
//  console.log(this.bugForm.controls.values + ' controls.values');
}


  //  alert('trying to submit');
  //  this.submitted = true;
  //   // stop here if form is invalid
  //  if (this.bugForm.invalid) {
  //       return;
  //   }
   // alert('SUCCESS!! :-)');
}
