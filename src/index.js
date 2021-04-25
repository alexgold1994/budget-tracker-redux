import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import budgetStore from './store/budgetStore';
import {addExpense} from './actions/budgetActions';
import moment from 'moment';
import getFilterData from './selectors/filteredExpensesData';

const store = budgetStore();


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

