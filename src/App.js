import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  BudgetTrackerApp  from "./components/budgetTrackerApp";
import  BudgetAdd  from "./components/budgetAdd";
import  BudgetEdit  from "./components/budgetEdit";
import  PageNotFound  from "./components/pageNotFound";
import Login from './components/Login';
import Navbar from './components/layout/Navbar';
import { createBrowserHistory } from 'history';
import PrivateRoute from './routers/PrivateRoute';




export const history = createBrowserHistory();
const App = () => {
  return (
   <Router history={history}>
     <div> 
       <Navbar/>      
       <Switch>
           <Route path="/" exact component={Login}/>
          <PrivateRoute path="/dashboard" exact component={BudgetTrackerApp}/>
          <PrivateRoute path="/add" component={BudgetAdd}/>
          <PrivateRoute path="/edit/:id" component={BudgetEdit}/>
          <Route  component={PageNotFound}/>          
       </Switch>
     </div>
   </Router>
  );
}

export default App;
