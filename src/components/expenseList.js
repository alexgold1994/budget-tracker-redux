import React from 'react';
import ExpenseListItem from './expenseListItem';
import {connect} from 'react-redux';
import filteredData from '../selectors/filteredExpensesData';



const ExpenseList = (props) => (
    <div>
        <h1 className='headTitle'>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem {...expense} key={expense.id}/>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: filteredData(state.expenses, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);

