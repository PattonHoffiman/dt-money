import { createContext, useContext, useEffect, useState, useCallback } from 'react';

import { api } from '../services/api';

interface TransactionContextData {
  transactions: Transaction[];
  createNewTransaction: (transaction: TransactionFormData) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData);

const TransactionsProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const createNewTransaction = useCallback(
    async (transactionData: TransactionFormData) => {
      const res = await api.post<any>('transactions', {
        ...transactionData,
        createdAt: new Date(),
      });

      const { transaction }  = res.data;

      setTransactions([
        ...transactions,
        transaction,
      ]);
    }, [transactions]
  );

  useEffect(() => {
    api.get<any>('transactions').then(res => setTransactions(res.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
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

