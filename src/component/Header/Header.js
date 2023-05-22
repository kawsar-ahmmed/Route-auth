import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import useFirebase from '../hooks/useFirebase';

const Header = () => {
    const { user, handleDignOut } = useFirebase();
    return (
        <div className='header'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/register">Register</NavLink>
            <span><img src={user?.photoURL && user.photoURL} alt="" /></span>
            {
                user?.uid
                    ?
                    <button onClick={handleDignOut}>Sign Out</button>
                    :
                    <NavLink to="/login">Login</NavLink>
            }
        </div>
    );
};

export default Header;