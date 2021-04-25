import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import budgetStore from './store/budgetStore';
import {addExpense, removeExpense, editExpense} from './actions/budgetActions';
import {setKeywordFilter, sortByAmount, sortByDate } from './actions/filterActions';
import moment from 'moment';

const store = budgetStore();

store.subscribe(() => {
  console.log(store.getState())
})


/* const ex1 = store.dispatch(addExpense({description: 'cyber truck', amount: '1000'}))
const ex2 = store.dispatch(addExpense({description: 'coffee', amount: '10', note: 'for one coffee'}))

store.dispatch(removeExpense({id: ex1.expense.id}))

store.dispatch(editExpense(ex2.expense.id, {amount: 14}))

store.dispatch(setKeywordFilter('coffee'))
store.dispatch(setKeywordFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate()) */






ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

