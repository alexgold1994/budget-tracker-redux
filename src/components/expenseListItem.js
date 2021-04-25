import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/budgetActions';

const ExpenseListItem = ({id, description, note, amount, createdAt, dispatch}) => (
    <div className='ExpenseListItem'>
        <h3>{description} - {createdAt}</h3>
        <p>Amount: ${amount}</p>
        {note && <p>Note: {note}</p>}
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);
