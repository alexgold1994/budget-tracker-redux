import { v4 as uuid } from 'uuid';
import firebase from '../firebase/firebase';

const database = firebase.database();


export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {   
                description = '',
                note = '',
                amount = 0,
                createdAt = 0
        } = expenseData
    
        const   expense = {description, note, amount, createdAt};
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    }
}

export const removeExpense = ({id}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

export const startRemoveExpense = ({id}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() =>{
            dispatch(removeExpense({id}));
        })
    }
}

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}


//For redux store
export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses
    }
};

//Firebase + redux
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses)); 

        })
    }
};