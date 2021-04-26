import React, { Component } from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.amount : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false
        }

    }




    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({description}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value
        this.setState(() => ({amount}))
    }

    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            description: this.state.description,
            amount: this.state.amount,
            note: this.state.note,
            createdAt: this.state.createdAt.format('L')
        })
    }

    render() {
            
        return (
                <div>
                <form className='ExpenseListItem' onSubmit = {this.onSubmit}>
                    <label htmlFor="text">Description</label>
                    <input type="text" placeholder='Description' value={this.state.description} onChange={this.onDescriptionChange}/>
                    <label htmlFor="text">Amount</label>
                    <input type="number" placeholder='Amount (number)' value={this.state.amount} onChange={this.onAmountChange}/>
                    
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={date => this.setState({ createdAt: date })} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}                    
                        />
                    <textarea placeholder='Add note for expense' value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    }
}
