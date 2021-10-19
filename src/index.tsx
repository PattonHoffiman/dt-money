import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';

import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          amount: 10000,
          type: 'deposit',
          category: 'Freela',
          creatAt: new Date(2021, 10, 20),
          title: 'Desenvolvimento de WebSite',
        },
        {
          id: 2,
          amount: 2000,
          type: 'deposit',
          title: 'Salário',
          category: 'Emprego',
          creatAt: new Date(2021, 11, 5),
        },
        {
          id: 3,
          amount: 200,
          type: 'withdraw',
          title: 'Internet',
          category: 'Contas',
          creatAt: new Date(2021, 11, 10),
        },
        {
          id: 4,
          amount: 80,
          type: 'withdraw',
          title: 'Academia',
          category: 'Contas',
          creatAt: new Date(2021, 11, 26),
        },
      ];
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
