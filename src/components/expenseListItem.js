import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startRemoveExpense} from '../actions/budgetActions';

const ExpenseListItem = ({id, description, note, amount, createdAt, dispatch}) => (
    <div className='ExpenseListItem'>
        
        <Link to={`/edit/${id}`}>
            <h5>{description} - {createdAt}</h5>
        </Link>
        <p>Amount: ${amount}</p>
        {note && <p>Note: {note}</p>}
        <button onClick={() => {
            dispatch(startRemoveExpense({id}))
        }}>Remove</button>
    </div>
)

export default connect()(ExpenseListItem);
