import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { api } from '../../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
} : NewTransactionModalProps) {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  const setDefaultAllValue = () => {
    setValue('');
    setTitle('');
    setCategory('');
    setType('deposit');
  };

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();
    
    await api.post('transactions', {
      type,
      title,
      value,
      category,
      createdAt: new Date(),
    });

    setDefaultAllValue();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}

      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <button
        type="button"
        className="modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          value={value}
          placeholder="Valor"
          onChange={event => setValue(event.target.value)}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            activeColor='green'
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            activeColor='red'
            isActive={type === 'withdraw'}
            onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}