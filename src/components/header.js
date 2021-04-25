import {NavLink } from "react-router-dom";

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

  export default Header;