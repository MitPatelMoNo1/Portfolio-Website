import React from 'react'
import { Button } from './button'
import './Hero.css';
import '../App.css';

function Hero() {
    return (
    <div className='hero-container'>
        <p className='home-title'>Welcome To My Portfolio.</p>
        <div className='important-btn'>
            <a href='/resume'><Button className='btns' buttonStyle={'btn--outline'} buttonSize={'btn--large'}>Resume</Button></a>
            <a href='/projects'><Button className='btns' buttonStyle={'btn--outline'} buttonSize={'btn--large'}>Projects</Button></a>
        </div>
    </div>
    )
}

export default Hero