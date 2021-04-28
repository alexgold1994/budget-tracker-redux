import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {startRemoveExpense} from '../actions/budgetActions';

const ExpenseListItem = ({id, description, note, amount, createdAt, dispatch}) => (
    <div className='container '>
        <div className="row">
            <div className="col s12 l6 offset-l3 center">      
                <ul className="collection with-header">
                    <li className="collection-header"><Link to={`/edit/${id}`}>
                                <h5>{description} - {createdAt}</h5>
                            </Link></li>
                    <li className="collection-item">Amount: ${amount}</li>
                    <li className="collection-item">{note && <p>Note: {note}</p>}</li>
                </ul> 
            </div>

            <div className="col l12 s12 center">
                <Link 
                    className = 'waves-effect waves-light btn-small' 
                    onClick={() => {
                        dispatch(startRemoveExpense({id}))
                    }}>Remove <i className="material-icons small left">delete_forever</i>
                </Link>
                <Link 
                    className = 'waves-effect waves-light btn-small' 
                    to={`/edit/${id}`}            
                >Edit <i className="material-icons small left">edit</i>
                </Link></div>
            </div>     
        

    </div>
)

export default connect()(ExpenseListItem);
