declare type Transaction  = {
  id: number;
  title: string;
  value: number;
  createdAt: Date;
  category: string;
  type: 'deposit' | 'withdraw';
};

declare type TransactionFormData = Omit<Transaction, 'id' | 'createdAt'>;