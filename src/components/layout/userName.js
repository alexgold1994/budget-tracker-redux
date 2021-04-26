import React, { Component } from 'react'
import firebase from 'firebase';

export class UserName extends Component {
    render() {
        
        var currentUser = firebase.auth().currentUser;
        return (
            <>
             <div className="welcome">
            <span>Hi, {currentUser.displayName}!</span>            
            </div>
            </>

        )
    }
}

export default UserName;
