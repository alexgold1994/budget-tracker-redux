import React from 'react';
import ExpenseListItem from './expenseListItem';
import {connect} from 'react-redux';
import {setKeywordFilter} from '../actions/filterActions';

const ExpenseFilterInput = (props) => (
    <div>
        <input type="text" 
        value={props.filters.keyword} 
        onChange={(e) => {
            props.dispatch(setKeywordFilter(e.target.value))
        }}
        />
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseFilterInput);