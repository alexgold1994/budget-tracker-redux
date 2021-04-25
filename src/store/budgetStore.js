import { createStore, combineReducers } from "redux";
import budgetReducer from '../reducers/budgetReducer';
import filterReducer from '../reducers/filterReducer';

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


 const budgetStore = () => {
    const store = createStore(combineReducers({

            expenses: budgetReducer,
            filters: filterReducer 

        }));
    return store
}

export default budgetStore;