import React from 'react';
import ExpenseList from './expenseList';
import ExpenseFilterInput from './expenseFilterInput';

const BudgetTrackerApp = () => {
    return (
      <div>
        <ExpenseFilterInput/>
        <ExpenseList/>
      </div>
    );
  };

  export default BudgetTrackerApp;