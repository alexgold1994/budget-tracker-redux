import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import budgetStore from './store/budgetStore';

const store = budgetStore();
console.log(store)




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

