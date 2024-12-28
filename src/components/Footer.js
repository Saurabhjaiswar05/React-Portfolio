import React from 'react'
import "./Footer.css"
import { FaGithub, FaLinkedinIn, FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                <FaMapLocation size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Mumbai</p>
                    <p>Maharashtra</p>
                </div>
                </div>
                
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    +919967672613
                    </h4>
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    sjsaurabh082@gmail.com
                    </h4>
                </div>


            </div>

            <div className="right">
                <h4>About the company</h4>
                <p>This is me Saurabh Jaiswar. CEO & Founder <br />
                    of this website. I enjoy discussing <br />
                    new projects and desing challenges.
                </p>
                <div className="social">
                    <a href="https://github.com/Saurabhjaiswar05" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <FaGithub size={35} style={{ color: "#fff", marginRight: "1rem", cursor: "pointer" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/saurabh-jaiswar-/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <FaLinkedinIn size={35} style={{ color: "blue", marginRight: "1rem", cursor: "pointer" }} />
                    </a>
                    
                    
                    <a href="https://wa.me/919967672613" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <FaWhatsapp size={35} style={{ color: "green", marginRight: "1rem", cursor: "pointer" }} />
                    </a>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
