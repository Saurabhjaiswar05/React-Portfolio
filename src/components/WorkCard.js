import React from 'react'
import "./WorkCard.css"

import { NavLink } from 'react-router-dom'

const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={ props.imgsrc} alt="project1 img" />
                <h2 className="project-title">{ props.title}</h2>
                <p>{ props.text}</p>
                <div className="pro-btns">
                    <a href={props.view} target="_blank" rel="noopener noreferrer" className="btn">View</a>
<a href={props.source} target="_blank" rel="noopener noreferrer" className="btn">Source</a>

                </div>
            </div>
  )
}

export default WorkCard
