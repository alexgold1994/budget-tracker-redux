import React from 'react';
import {connect} from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...restProps
}) => (
    <Route {...restProps} component={(props) => (
        isAuthenticated ? (

        <div>

            <Navbar/>      
            <Component {...props} />

        </div>
        ): (
            <Redirect to='/'/>

        )
    )}/>
)


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);