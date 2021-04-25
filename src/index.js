import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import budgetStore from './store/budgetStore';

const store = budgetStore();

store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch({
  type: 'INC',
  incBy: 10
});




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

