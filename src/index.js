import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import budgetStore from './store/budgetStore';
import {addExpense, removeExpense, editExpense} from './actions/budgetActions';
import {setKeywordFilter, sortByAmount, sortByDate, setEndtDate, setStartDate } from './actions/filterActions';
import moment from 'moment';

const store = budgetStore();

const getFilterData = (expenses, filters) => {
  return expenses.filter((expense) => {
    const  isDateRange = moment(expense.createdAt).isBetween(filters.startDate, filters.endDate)
    const keywordFound = expense.description.toLowerCase().includes(filters.keyword.toLowerCase())    
    return isDateRange && keywordFound
  }).sort((a, b) => {
    if (filters.sortBy === 'date')
      {
        return moment(b.createdAt) - moment(a.createdAt)
      }
    else if (filters.sortBy === 'amount')
      {
        return b.amount < a.amount ? 1 : -1
      }
  })
  
}

store.subscribe(() => {
  const state = store.getState();
  const data = getFilterData(state.expenses, state.filters)

  console.log(data);
})


 const ex1 = store.dispatch(addExpense({description: 'cyber truck', amount: '1000', createdAt: moment().add(5, 'day').format('L')}))
const ex2 = store.dispatch(addExpense({description: 'coffee', amount: '10', note: 'for one coffee', createdAt: moment().add(2, 'day').format('L')}))

// store.dispatch(removeExpense({id: ex1.expense.id}))

// store.dispatch(editExpense(ex2.expense.id, {amount: 14}))

// store.dispatch(setKeywordFilter('coffee'))
// store.dispatch(setKeywordFilter())

store.dispatch(sortByAmount())
store.dispatch(sortByDate()) 

store.dispatch(setStartDate(moment().format('L')))
store.dispatch(setEndtDate(moment().add(10, 'day').format('L')))





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

