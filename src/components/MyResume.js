import React from 'react'
import "./MyResume.css"
import '../App.css'
import {BsFillFilePdfFill} from 'react-icons/bs'
import { Button } from './button'
function resume() {
  return (
    <div>
      <div className='download'>
      <a href='https://drive.google.com/uc?export=download&id=1fjH_CJNI4wvLUB0woitmqtxdBJsO39XP'><Button className='resume-btns' buttonStyle={'btn--primary'} buttonSize={'btn--large'}> <BsFillFilePdfFill/> Click To Download The Resume</Button></a>
      </div>
      <div className='resume_container'>
          <div className='resume_wrapper'>
          </div>
        </div>
    </div>
  )
}

export default resume