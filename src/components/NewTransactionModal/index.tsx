import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose
}) => {
  const { createNewTransaction } = useTransactions();

  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

  const setDefaultAllValue = () => {
    setValue('');
    setTitle('');
    setCategory('');
    setType('deposit');
  };

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createNewTransaction({
      type,
      title,
      category,
      value: Number(value)
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