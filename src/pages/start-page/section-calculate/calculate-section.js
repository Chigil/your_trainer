import React, {Component} from 'react';
import push from "../../../img/push.png";
import squat from "../../../img/squat.png";
import deadlift from "../../../img/deadlift.png";
import './calculate-section.css'

const CalculateSectionContent = () => {
    return (
        <React.Fragment>
            <h1>CALCULATE YOUR MAXIMUM</h1>
            <div className="calculate-description">
                <div className="calculate-panel">
                    <div className="calculate-card">
                        <img className="imgCalculate" src={push}/>
                        <ul className="calculate-card-list">
                            <li><p>Weight:</p></li>
                            <li><input className="weightCount"/></li>
                            <li><p>Number of repetitions:</p></li>
                            <li><input className="numberCount"/></li>
                            <li>
                                <button className="calculateResult">calculate</button>
                            </li>
                            <li><p>Weight for 1 rep:</p></li>
                            <li><input className="resultCount"/></li>
                        </ul>
                    </div>
                </div>
                <div className="calculate-choice">
                    <h2>Know your maximum with basic exercises</h2>
                    <div className="calculate-buttons">
                        <div className="calculate-button">
                            <img src={squat}/>
                            <p>squat</p>
                        </div>
                        <div className="calculate-button">
                            <img src={push}/>
                            <p>bench press</p>
                        </div>
                        <div className="calculate-button">
                            <img src={deadlift}/>
                            <p>deadlift</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CalculateSectionContent;
