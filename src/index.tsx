import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: { transaction: Model, },  

  seeds(server) {
    server.db.loadData({
      transactions: [ 
        { 
          id: 1,
          title: 'Desenvolvimento de WebSite',
          value: 3000,
          type: 'deposit',
          category: 'Freela',
          createdAt: new Date('2021-10-04'),
        },
        {
          id: 2,
          title: 'Tênis de Corrida',
          value: 300,
          type: 'withdraw',
          category: 'Compras',
          createdAt: new Date('2021-10-15'),
        }
      ],
    })
  },
  
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
