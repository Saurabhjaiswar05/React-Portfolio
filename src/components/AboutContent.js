import React from 'react'
import "./AboutContent.css"

import { Link } from 'react-router-dom'

import React1 from "../components/assets/react1.jpeg"
import React2 from "../components/assets/react2.jpeg"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react front-end developer. I create responsive secure website for my clients.</p>
            <Link to="/contact">
                <button className='btn'>CONTACT</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className='img' alt='imgreact1'  />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className='img' alt='imgreact2'  />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
