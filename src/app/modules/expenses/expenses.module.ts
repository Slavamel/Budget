import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { AddExpenseFormComponent } from './components/add-expense-form/add-expense-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpensesComponent } from './expenses.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { CustomCurrencyPipe } from './services/custom-currency.pipe';

@NgModule({
  declarations: [
    AddExpenseFormComponent,
    ExpensesComponent,
    ExpenseListComponent,
    CustomCurrencyPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [ExpensesComponent]
})
export class ExpensesModule { }
