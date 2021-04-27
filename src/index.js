import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.css';
import App, {history} from './App';
import budgetStore from './store/budgetStore';
import {startSetExpenses} from './actions/budgetActions';
import firebase from './firebase/firebase';
import {login, logout} from './actions/auth';
import Loader from "react-loader-spinner";


const store = budgetStore();



/* 
store.subscribe(() => {
  const state = store.getState();
  const data = getFilterData(state.expenses, state.filters)
  console.log(data);
}) */
function refreshPage(){ 
  window.location.reload(); 
}

const storeProvider = (
  <Provider store={store}>
    <App />
  </Provider>
)


let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
      ReactDOM.render(storeProvider , document.getElementById('root'));
        hasRendered = true
    }
}

ReactDOM.render(<Loader   
  type="Puff"
  color="#00BFFF"
  height={300}
  width={300}
  timeout={3000} //3 secs
/> , document.getElementById('root'));



firebase.auth().onAuthStateChanged((user) => {
  if(user){
      store.dispatch(login(user.uid));
      store.dispatch(startSetExpenses()).then(() => {
          renderApp();
          if(history.location.pathname === '/'){
              history.push('/dashboard');
              refreshPage();
          }
      });       
  }else{
      store.dispatch(logout());
      renderApp();
      history.push('/') 
  }
})



