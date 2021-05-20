import React, {Component} from 'react';
import './landing-section.css'
import {NavLink} from "react-router-dom";
import RegistrationModal from "../../../components/RegistrationModal/RegistrationModal";

const LandingSectionContent = () => {
    return(
        <div className="intro">
            <h1 className="intro_header">
                <span className="header-color-text">CHOOSE </span>YOUR TRAINER<br/>
                <span className="header-color-text">CREATE </span>YOUR PROGRAM
            </h1>
            <h2 className="intro_description">This is a website with which you can always control
                your training and
                nutrition</h2>
            <RegistrationModal/>
        </div>
    )
}
export default LandingSectionContent;



