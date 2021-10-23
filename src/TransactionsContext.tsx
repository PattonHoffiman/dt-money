import { createContext, useContext, useEffect, useState } from 'react';

import { api } from './services/api';

interface TransactionContextData {
  transactions: Transaction[];
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get<any>('transactions').then(res => setTransactions(res.data.transactions));
  }, [transactions]);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

const useTransactions = (): TransactionContextData => {
  const context = useContext(TransactionsContext);

  if (!context) throw new Error('useTransactions must be used with a TransactionsProvider');
  return context;
};

export { TransactionsProvider, useTransactions };

