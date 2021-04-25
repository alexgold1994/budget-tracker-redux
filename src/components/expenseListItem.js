import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/budgetActions';

const ExpenseListItem = ({id, description, note, amount, createdAt, dispatch}) => (
    <div className='ExpenseListItem'>
        
        <Link to={`/edit/${id}`}>
            <h3>{description} - {createdAt}</h3>
        </Link>
        <p>Amount: ${amount}</p>
        {note && <p>Note: {note}</p>}
        <button onClick={() => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);
