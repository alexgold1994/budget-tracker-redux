import  {Link} from 'react-router-dom'
import React from 'react';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Logout = ({startLogout}) => {
    return (
        <div>
            <Link
            className = 'btn-large pink lighten-1 z-depth-0 right ' 
            to="/"
            onClick={startLogout}>
                 <i className="material-icons right">send</i>
                 Log out</Link>
        </div> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
};

export default connect(null, mapDispatchToProps)(Logout);