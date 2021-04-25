import React from 'react';

const ExpenseListItem = ({description, note, amount, createdAt}) => (
    <div className='ExpenseListItem'>
        <h3>{description} - {createdAt}</h3>
        <p>Amount: ${amount}</p>
        {note && <p>Note: {note}</p>}
    </div>
)

export default ExpenseListItem;
