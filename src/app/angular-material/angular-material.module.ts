import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import {
  MatToolbarModule,
  MatTableModule,
  MatFormFieldModule,
  MatSortModule,
  MatButtonModule,
  MatTooltipModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule,
  MatCheckboxModule,
  MatDatepickerModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatMomentDateModule
  ]
})

export class AngularMaterialModule { }
