import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';



const BudgetTrackerApp = () => {
  return (
    <div>
      BudgetTrackerApp
    </div>
  );
};

const BudgetAdd = () => {
  return (
    <div>
      BudgetAdd
    </div>
  );
};

const BudgetEdit = () => {
  return (
    <div>
      BudgetEdit
    </div>
  );
};

const PageNotFound = () => {
  return ( 
      <div>
        Eror 404 ! - <Link to="/">Back Home</Link>
      </div>
    );
}

const Header = () => {
  return ( 
    <header>
      <h1>Budget Tracker App</h1>
      <NavLink exact activeClassName="is-active" to="/">Home</NavLink>
      <NavLink activeClassName="is-active" to="/add">Add</NavLink>
      <NavLink activeClassName="is-active" to="/edit">Edit</NavLink>
    </header>
   );
}


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
