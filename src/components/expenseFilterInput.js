import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setKeywordFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filterActions';
import {DateRangePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseFilterInput extends Component {

    state = {
        focused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    
    render (props) {
        return (
            <div className='row '>
            <input
                className='input-field  col  s12 m6 l4 center-align'
                placeholder='enter keyword'
                type="text" 
                value={this.props.filters.keyword} 
                onChange={(e) => {
                    this.props.dispatch(setKeywordFilter(e.target.value))
                }}
            />

            <div className="input-field col s12 m6 l3">
                <select            
                    className='browser-default'
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if (e.target.value === 'date') {
                            this.props.dispatch(sortByDate());
                        }else if (e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount());
                        }
                    }}
                >   <option value="" disabled selected>Filter by data/amount</option>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                
            </div>
            <div className="input-field col s12 m6 l3">
            <DateRangePicker
                startDate={this.props.filters.startDate} 
                endDate={this.props.filters.endDate} 
                onDatesChange={this.onDatesChange} 
                focusedInput={this.state.focused}
                onFocusChange={focusedInput => this.setState({focused: focusedInput })} // PropTypes.func.isRequired,
                numberOfMonths={2}
                isOutsideRange={() => false}
                showClearDates={true}
             />
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseFilterInput);