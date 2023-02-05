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
    subCategory: [null],
    description: [null],
    date: new FormControl<Date>(new Date(), {
      nonNullable: true,
      validators: [Validators.required]
    }),
  }, {updateOn: 'submit'});

  categories = categories;
  subCategories = subCategories;

  constructor(private fb: FormBuilder) {}

  onSubmit(formDirective: FormGroupDirective): void {
    if (this.expenseForm.invalid) return;

    const formValue = this.expenseForm.getRawValue();
    this.addExpense.emit({
      amount: formValue.amount!,
      category: formValue.category!,
      date: formValue.date,
      description: formValue.description,
      subCategory: formValue.subCategory
    });

    this.expenseForm.reset(undefined, {emitEvent: false});
    formDirective.resetForm();    
  }
}

const subCategories = [
  'Rent',
  'Repairs',
  'Misc',
  'Electricity',
  'Water',
  'Internet',
  'Phone',
  'Taxi',
  'Clothes',
  'Shoes',
  'Haircuts',
  'Cosmetics',
  'Subscriptions',
  'Education',
  'Birthday',
  'Charity',
  'Alcohol',
  'Games',
  'Movies',
  'Concerts',
  'Vacations',
  'Subscriptions',
  'Fast Food',
  'Snacks',
  'Grocery',
  'Canteen',
  'Drugs',
];

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