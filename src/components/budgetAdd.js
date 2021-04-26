import React from 'react';
import ExpenseForm from './expenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/budgetActions';

const BudgetAdd = (props) => {
    return (
      <div>
        <h1 className='headTitle'> Add Budget</h1>
        <ExpenseForm onSubmit={(expense) => {
          props.dispatch(startAddExpense(expense));
          props.history.push('/dashboard')
        }}/>
      </div>

    );
  };

  export default connect()(BudgetAdd);