export interface Expense {
  amount: number;
  date: Date;
  category: string;
  description: string | null;
  currency: string;
}