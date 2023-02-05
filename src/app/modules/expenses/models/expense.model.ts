export interface Expense {
  amount: number;
  date: Date;
  category: string;
  subCategory: string | null;
  description: string | null;
}