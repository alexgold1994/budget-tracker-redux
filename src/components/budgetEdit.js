import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseForm';
import {startEditExpense} from '../actions/budgetActions';

const BudgetEdit = (props) => {
  console.log(props.expense)
  return (
      <div>
        <h1 className='headTitle'>Budget Edit </h1>
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {
            props.dispatch(startEditExpense(props.expense.id, expense));
            props.history.push('/');
          }}
        />  
      </div>
      
    )}

  const mapStateToProps = (state, props) => {
    return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
  }

  export default connect(mapStateToProps)(BudgetEdit);