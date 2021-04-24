import { createStore } from "redux";

const budgetStore = () => {
    const store = createStore((state = {couter:0}) => {
        return state;
    });
    return store
}

export default budgetStore;

