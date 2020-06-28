import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return (
        <div className='navigation-container'>
            <div className='navigation-link-container'>
                <Link className='navigation-link' to='/'> Download</Link>
                <Link className='navigation-link' to='/News' > News</Link>
                <Link className='navigation-link' to='/About' > About</Link>
                <Link className='navigation-link' to='/Contact' > Contact</Link>
            </div>
        </div>
    );
}

export default Navigation;