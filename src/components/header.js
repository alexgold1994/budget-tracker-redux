import {NavLink } from "react-router-dom";
import Logout from './Logout';
//import firebase from 'firebase';

/* const currentUser = firebase.auth().currentUser;
{currentUser.displayName} */

const Header = () => {
    return ( 

      <div>
      <ul>
        <li className='center'></li>
        <li><NavLink exact activeClassName="is-active right brand-log"  to="/dashboard">Home</NavLink></li>
        <li><NavLink activeClassName="is-active right" to="/add"><i className="material-icons left">add_circle</i>Add</NavLink></li>
      </ul>
      <Logout/>
      </div>
     );
  }

  export default Header;
