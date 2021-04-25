import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import budgetStore from './store/budgetStore';
import getFilterData from './selectors/filteredExpensesData';
import {startSetExpenses} from './actions/budgetActions';

const store = budgetStore();

/* 
store.subscribe(() => {
  const state = store.getState();
  const data = getFilterData(state.expenses, state.filters)
  console.log(data);
}) */


const storeProvider = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<p>Loading...</p> , document.getElementById('root'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(storeProvider , document.getElementById('root'));
})





