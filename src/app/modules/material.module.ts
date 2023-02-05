import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

const modules = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatCommonModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatListModule
]

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ]
})
export class MaterialModule { }