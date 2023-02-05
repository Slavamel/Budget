import { Component } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  expenses: Expense[] = mockExpenses;
  mapExpenses = this.convertToMap(mockExpenses);

  compareFn(a: KeyValue<number, any>, b: KeyValue<number, any>): number {
    return b.key - a.key;
  }

  private convertToMap(expenses: Expense[]): Map<number, Expense[]> {
    const map = new Map();

    for(let expense of expenses) {
      const timeKey = expense.date.getTime();
      const existingExpenses = map.get(timeKey);
      if (existingExpenses) {
        map.set(timeKey, [...existingExpenses, expense]);
      } else {
        map.set(timeKey, [expense])
      }
    }

    return map;
  }
}


const mockExpenses = [
  {
    amount: 100,
    date: new Date(2023, 1, 7),
    category: 'Some',
    description: null,
  },
  {
    amount: 1500,
    date: new Date(2023, 1, 5),
    category: 'Housing',
    description: 'some text',
  },
  {
    amount: 1200,
    date: new Date(2023, 1, 5),
    category: 'Housing',
    description: null,
  },
  {
    amount: 500,
    date: new Date(2023, 1, 5),
    category: 'Housing',
    description: null,
  },
  {
    amount: 100,
    date: new Date(2023, 1, 5),
    category: 'Housing',
    description: null,
  },
  {
    amount: 100,
    date: new Date(2023, 1, 6),
    category: 'Housing',
    description: null,
  }
]