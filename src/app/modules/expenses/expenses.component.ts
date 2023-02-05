import { Component } from '@angular/core';
import { Expense } from './models/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  expenses: Expense[] = [];

  onAddExpense(expense: Expense): void {
    console.log(expense);
    this.expenses.push(expense);
  }
}
