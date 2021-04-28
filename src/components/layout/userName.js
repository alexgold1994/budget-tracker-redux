import React, { Component } from 'react'
import firebase from 'firebase';

export class UserName extends Component {

    state = {
        user: ''
    }

    

    render() {
        
        var currentUser = firebase.auth().currentUser;
        return (
            <>
             <div className="welcome center">
            <span>Hi, {currentUser.displayName}!</span>            
            </div>
            </>

        )
    }
}

export default UserName;
