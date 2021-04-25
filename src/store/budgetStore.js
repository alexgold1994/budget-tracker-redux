import { createStore, combineReducers, applyMiddleware } from "redux";
import budgetReducer from '../reducers/budgetReducer';
import filterReducer from '../reducers/filterReducer';
import thunk from 'redux-thunk';
import App from "../App";



 const budgetStore = () => {
    const store = createStore(combineReducers({

            expenses: budgetReducer,
            filters: filterReducer 

        }),
            applyMiddleware(thunk));
       
    return store
}

export default budgetStore;