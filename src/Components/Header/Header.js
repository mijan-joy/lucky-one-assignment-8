import React from 'react';
import logo from '../../images/logo.png'; //
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <img className="header-logo" src={logo} alt="logo" />
            <div>
            <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/about">About</a>
               
            </div>
        </nav>
        
    );
};

export default Header;