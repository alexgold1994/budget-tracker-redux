import React from 'react';
import ExpenseForm from './expenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/budgetActions';

const BudgetAdd = (props) => {
    return (
      <div>
        BudgetAdd
        <ExpenseForm onSubmit={(expense) => {
          props.dispatch(addExpense(expense));
          props.history.push('/')
        }}/>
      </div>

    );
  };

  export default connect()(BudgetAdd);