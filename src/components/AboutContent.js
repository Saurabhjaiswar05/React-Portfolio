import React from 'react'
import "./AboutContent.css"

import { Link } from 'react-router-dom'

import html from "../components/assets/html-5-svgrepo-com.svg"
import css from "../components/assets/css-3-svgrepo-com.svg"
import boot from "../components/assets/bootstrap-svgrepo-com.svg"
import js from "../components/assets/javascript-svgrepo-com.svg"
import tailwind from "../components/assets/tailwind-svgrepo-com.svg"
import react from "../components/assets/react-logo-svgrepo-com.svg"
import node from "../components/assets/node-js-svgrepo-com.svg"
import express from "../components/assets/expressNormal.png"
import php from "../components/assets/php3-svgrepo-com.svg"
import laravel from "../components/assets/laravel-svgrepo-com.svg"
import mongodb from "../components/assets/mongo-svgrepo-com.svg"
import mysql from "../components/assets/mysql-logo-svgrepo-com.svg"

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a Fullstack developer. I create dynamic and responsive secure website for my clients.</p>
            <Link to="/contact">
                <button className='btn'>CONTACT</button>
            </Link>
        </div>

        <div className="righta">
            <div className="img-container">
                
                <div className="img-stack ">
                    <img src={html} className='img' alt='imgreact1'  />
                    <img src={css} className='img' alt='imgreact2'  />
                    <img src={boot} className='img' alt='imgreact2'  />
                    <img src={js} className='img' alt='imgreact2'  />
                    <img src={tailwind} className='img' alt='imgreact2'  />
                    <img src={react} className='img' alt='imgreact2'  />
                    <img src={node} className='img' alt='imgreact2'  />
                    <img src={express} className='img' alt='imgreact2'  />
                    <img src={php} className='img' alt='imgreact2'  />
                    <img src={laravel} className='img' alt='imgreact2'  />
                    <img src={mongodb} className='img' alt='imgreact2'  />
                    <img src={mysql} className='img' alt='imgreact2'  />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
