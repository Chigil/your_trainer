import React, {Component} from 'react';
import './landing-section.css'

const LandingSectionContent = () => {
    return(
        <div className="intro">
            <h1 className="intro_header">
                <span className="header-color-text">CHOOSE </span>YOUR TRAINER
                <span className="header-color-text">CREATE </span>YOUR PROGRAM
            </h1>
            <h2 className="intro_description">This is a website with which you can always control
                your training and
                nutrition</h2>
            <button className="intro_button" onClick="#!">Try Now</button>
        </div>
    )
}
export default LandingSectionContent;



