import React from 'react';
import ExpenseForm from './expenseForm';
import {connect} from 'react-redux';
import {startAddExpense} from '../actions/budgetActions';

const BudgetAdd = (props) => {
    return (
      <div>
        BudgetAdd
        <ExpenseForm onSubmit={(expense) => {
          props.dispatch(startAddExpense(expense));
          props.history.push('/')
        }}/>
      </div>

    );
  };

  export default connect()(BudgetAdd);