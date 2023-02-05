import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-add-expense-form',
  templateUrl: './add-expense-form.component.html',
  styleUrls: ['./add-expense-form.component.scss']
})
export class AddExpenseFormComponent {
  @Output() addExpense: EventEmitter<Expense> = new EventEmitter();

  expenseForm = this.fb.group({
    amount: new FormControl<number | null>(null, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)]
    }),
    category: new FormControl<string | null>(null, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(1)]
    }),
    description: [null],
    date: new FormControl<Date>(new Date(), {
      nonNullable: true,
      validators: [Validators.required]
    }),
  }, {updateOn: 'submit'});

  categories = categories;

  constructor(private fb: FormBuilder) {}

  onSubmit(formDirective: FormGroupDirective): void {
    if (this.expenseForm.invalid) return;

    const formValue = this.expenseForm.getRawValue();
    this.addExpense.emit({
      amount: formValue.amount!,
      category: formValue.category!,
      date: new Date(formValue.date.getFullYear(), formValue.date.getMonth(), formValue.date.getDate()),
      description: formValue.description,
      currency: 'AMD'
    });

    this.expenseForm.reset(undefined, {emitEvent: false});
    formDirective.resetForm();    
  }
}

const categories = [
  'Housing',
  'Utilities',
  'Taxi',
  'Clothing',
  'Supplies',
  'Personal',
  'Gifts',
  'Entertainment',
  'Food',
  'Health',
  'Misc',
];