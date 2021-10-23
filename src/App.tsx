import { useState } from 'react';
import Modal from 'react-modal';

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './TransactionsContext';
import { NewTransactionModal } from './components/NewTransactionModal';

// ? Specify the main app element, for help with accessibility.
Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true);
  const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false);
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
