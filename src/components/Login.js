import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const Login = ({startLogin}) => {
    return (
        <div className="center ">
            <button
            className = 'btn-large pink lighten-1 z-depth-0'
            onClick={startLogin}>
                 <i className="material-icons right">send</i>
                 Login</button>

                 
        </div> 
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
};

export default connect(null, mapDispatchToProps)(Login);