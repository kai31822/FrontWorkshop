import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
//css
import './navbar.css'
export const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='links'>
                    <Link to='/'>Home</Link>
                    <Link to='/cart'>
                        <ShoppingCart />
                    </Link>
                </div>
            </div>
        </>
    );
};
