import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <div className='navigation-container'>
            <div className='navigation-link-container'>
                <NavLink className='navigation-link' activeClassName='navigation-active-nav' to='/' exact={true}> Download</NavLink>
                <NavLink className='navigation-link' activeClassName='navigation-active-nav' to='/News' > News</NavLink>
                <NavLink className='navigation-link' activeClassName='navigation-active-nav' to='/About' > About</NavLink>
                <NavLink className='navigation-link' activeClassName='navigation-active-nav' to='/Contact' > Contact</NavLink>
            </div>
        </div>
    );
}

export default Navigation;