import { Component } from '@angular/core';
import { Expense } from './models/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent {
  expenses: Expense[] = mockExpenses;

  onAddExpense(expense: Expense): void {
    console.log(expense);
    this.expenses.push(expense);
  }
}

const mockExpenses = [
  {
    amount: 100,
    date: new Date(2023, 1, 7),
    category: 'Some',
    description: null,
    currency: 'AMD'
  },
  {
    amount: 1500,
    date: new Date(2023, 1, 5),
    category: 'Housing',
    description: 'some text',
    currency: 'AMD'
  },
  {
    amount: 1200,
    date: new Date(2023, 1, 5),
    category: 'Housing',
    description: null,
    currency: 'AMD'
  },
  {
    amount: 500,
    date: new Date(2023, 1, 5),
    category: 'Housing',
    description: null,
    currency: 'AMD'
  },
  {
    amount: 100,
    date: new Date(2023, 1, 5),
    category: 'Housing',
    description: null,
    currency: 'AMD'
  },
  {
    amount: 100,
    date: new Date(2023, 1, 6),
    category: 'Housing',
    description: null,
    currency: 'AMD'
  }
]