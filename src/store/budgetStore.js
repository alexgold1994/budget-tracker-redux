import { createStore, combineReducers } from "redux";
import budgetReducer from '../reducers/budgetReducer';
import filterReducer from '../reducers/filterReducer';



 const budgetStore = () => {
    const store = createStore(combineReducers({

            expenses: budgetReducer,
            filters: filterReducer 

        }));
    return store
}

export default budgetStore;