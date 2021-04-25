import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import  BudgetTrackerApp  from "./components/budgetTrackerApp";
import  BudgetAdd  from "./components/budgetAdd";
import  BudgetEdit  from "./components/budgetEdit";
import  PageNotFound  from "./components/pageNotFound";


const App = () => {
  return (
   <Router>
     <div>
       <Header/>
       <Switch>
          <Route path="/" exact component={BudgetTrackerApp}/>
          <Route path="/add" component={BudgetAdd}/>
          <Route path="/edit" component={BudgetEdit}/>
          <Route  component={PageNotFound}/>
       </Switch>


     </div>
   </Router>
  );
}

export default App;
