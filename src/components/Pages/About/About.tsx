import React from 'react';
import './About.css';
import Avatar from './assets/avatar.jpg';

function About() {
    return (
        <div className='pages-container'>
            <h1>About</h1>
            <div className='div-column-container'>
                <div className='pages-about-column-left'>
                    <img src={Avatar} className="pages-about-avatar" />
                </div>
                <div className='pages-about-column-right'>
                    <h1>ip-code</h1>
                    <p>I’m an intermediate EVE Online player and a beginner programmer. Over the years I have tried to assist myself with different standalone php scripts. Now I am trying to recreate those scripts in a user friendly and functional collection which I hope you will find useful. Good luck out there!</p>
                    <br />
                    <p>o7</p>
                </div>
            </div>
        </div>
    );
}

export default About;