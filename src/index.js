import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import budgetStore from './store/budgetStore';
import {addExpense, removeExpense, editExpense} from './actions/budgetActions';
import {setKeywordFilter, sortByAmount, sortByDate, setEndtDate, setStartDate } from './actions/filterActions';
import moment from 'moment';
import getFilterData from './selectors/filteredExpensesData';

const store = budgetStore();

 const ex1 = store.dispatch(addExpense({description: 'cyber truck', amount: '1000', createdAt: moment().add(5, 'day').format('L')}))
const ex2 = store.dispatch(addExpense({description: 'coffee', amount: '10', note: 'for one coffee', createdAt: moment().add(2, 'day').format('L')}))

// store.dispatch(removeExpense({id: ex1.expense.id}))

// store.dispatch(editExpense(ex2.expense.id, {amount: 14}))

store.dispatch(setKeywordFilter(''))
// store.dispatch(setKeywordFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate()) 

store.dispatch(setStartDate(moment().format('L')))
store.dispatch(setEndtDate(moment().add(10, 'day').format('L')))

store.subscribe(() => {
  const state = store.getState();
  const data = getFilterData(state.expenses, state.filters)
  console.log(data);
})

const storeProvider = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
 storeProvider ,
  document.getElementById('root')
);

