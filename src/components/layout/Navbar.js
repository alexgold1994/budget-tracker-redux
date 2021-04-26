import React from 'react';
import Header from '../header';
import UserName from './userName';

const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Header/> 
                    <UserName/>                 
                    
                </div>
                
            </nav>
        </div>
    );
};



export default (Navbar);