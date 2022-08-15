import React from 'react'
import './Info.css'
import '../App.css';
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsFillFilePdfFill} from 'react-icons/bs'





function Info() {
    return (
        <div className='info__component'>
            <h1>About Me</h1>
            <p className='intro'>
            Hello, and welcome to my Portfolio. <br/>
            My name is Mit Patel I'm a software engineer, who took the non-traditonal route and attened a coding bootcamp <br/>
            I'm based in Chicago area, I am a full-stack engineer and I recently graduated from the <a href='https://www.codingdojo.com/'>Coding Dojo</a> bootcamp. <br/> 
            I work on web applications that use HTML, CSS, React, Java,<br/> MongoDB, Spring Boot, And MySQL.
            I am currently Job hunting in the software engineer feild looking to put my new skills to the test.
            </p>
            <div className='work__links'>
                <a className='icon_links' href='https://www.linkedin.com/in/mit-patel-a01a16235/'><BsLinkedin/></a>
                <a className='icon_links' href='https://github.com/MitPatelMoNo1'><BsGithub/></a>
                <a  className='icon_links' href='/resume'><BsFillFilePdfFill/>Resume</a>
            </div>
            <div className='footer'>
                
            </div>
        </div>
    )
}

export default Info