import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AddExpenseFormComponent } from './components/add-expense-form/add-expense-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesComponent } from './expenses.component';

@NgModule({
  declarations: [
    AddExpenseFormComponent,
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [ExpensesComponent]
})
export class ExpensesModule { }
