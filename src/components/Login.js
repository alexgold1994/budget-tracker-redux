import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const Login = ({startLogin}) => {
    return (
        <div className="btn-login center">
                              
            <button
            className = 'btn-large waves-effect waves-purple '
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