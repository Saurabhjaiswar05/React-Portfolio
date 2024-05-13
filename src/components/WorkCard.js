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
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to={props.source} className="btn">Source</NavLink>
                </div>
            </div>
  )
}

export default WorkCard
