import { useEffect, useState } from 'react';

import formatMoney from '../../utils/formatMoney';
import { useTransactions } from '../../hooks/useTransactions';

import totalImg from '../../assets/total.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container } from "./styles";

export const Summary: React.FC = () => {
  const { transactions } = useTransactions();
  const [color, setColor] = useState<'green' | 'red'>('green');

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.total += transaction.value;
      acc.deposits += transaction.value;
    } else {
      acc.total -= transaction.value;
      acc.withdraws += transaction.value;
    }

    return acc;
  }, {
    total: 0,
    deposits: 0,
    withdraws: 0,
  });

  useEffect(() => {
    if (summary.total > 0) setColor('green');
    else setColor('red');
  }, [summary]);
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatMoney(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {formatMoney(summary.withdraws)}</strong>
      </div>
      <div className={`hightlight ${color}`}>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {summary.total < 0 ? (
            <strong>{formatMoney(summary.total)}</strong>
          ) : (
            <strong>{formatMoney(summary.total)}</strong>
          )
          }
        </strong>
      </div>
    </Container>
  );
}