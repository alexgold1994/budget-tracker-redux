import { v4 as uuid } from 'uuid';


const stateDemo = {
    epenses: [{
        id: '123',
        description: 'Truck',
        amount: '',
        createAt: 0
    }],
    filters: {
        keyword: 'rent',
        sortby: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }}}

export const removeExpense = ({id}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}