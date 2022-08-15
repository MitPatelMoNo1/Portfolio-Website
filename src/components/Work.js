import React from 'react'
import './Work.css';
import'../App.css';
import {BsGithub} from 'react-icons/bs'

function Work() {
    return (
        <div className='page'>
            <h1 className='title'>My Projects</h1>
        <div className='container'>
        <div className='wrapper2'>
            <p>RickyAndMorty</p>
            <p className='stack'>MERN</p>
            <a className='git_links' href='https://github.com/Esokami/RickyAndMorty_MERN'><BsGithub/></a>
        </div>
        <div className='wrapper2'>
            <p>Developers On Deck</p>
            <p className='stack'>Java</p>
            <a className='git_links' href='https://github.com/MitPatelMoNo1/DevsOnDeck'><BsGithub/></a>
        </div>
        <div className='wrapper2'>
            <p>Portfolio Website</p>
            <p className='stack'>MERN</p>
            <a className='git_links' href='/'><BsGithub/></a>
        </div>
        </div>
        </div>
    )
}

export default Work