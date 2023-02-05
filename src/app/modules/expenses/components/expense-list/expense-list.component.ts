import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnChanges {
  @Input() expenses: Expense[] = [];
  expensesMapped: Map<number, Expense[]> = new Map();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['expenses'] && changes['expenses'].currentValue) {
      this.expensesMapped = this.convertToMap(this.expenses);
    }
  }

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