import React, {useContext} from 'react';
import './landing-section.css'
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";



const LandingSectionContent = observer(() => {
    const {modal} = useContext(Context)
    return(
        <div className="intro">
            <h1 className="intro_header">
                <span className="header-color-text">CHOOSE </span>YOUR TRAINER<br/>
                <span className="header-color-text">CREATE </span>YOUR PROGRAM
            </h1>
            <h2 className="intro_description">This is a website with which you can always control
                your training and
                nutrition</h2>
            <button onClick={()=>modal.openModal("LoginModal")}>click!</button>
        </div>
    )
})
export default LandingSectionContent;



