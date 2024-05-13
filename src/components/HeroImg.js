import React from 'react'
import { Link } from 'react-router-dom'
import "./HeroImg.css"
import introBg from "../components/assets/intro-bg.jpeg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img src={introBg} alt="Intro bg img" className='intro-img' />
        </div>
        <div className="content">
            <p>HI, I'M SAURABH</p>
            <h1>Frontend Developer</h1>
            <div>
                <Link to="/project" className='btn'>Project</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
