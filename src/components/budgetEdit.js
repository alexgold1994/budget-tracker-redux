import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './expenseForm';

const BudgetEdit = (props) => {
  console.log(props.expense)
  return (
      <div>BudgetEdit
        <ExpenseForm
          expense={props.expense}
          onSubmit={(expense) => {

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