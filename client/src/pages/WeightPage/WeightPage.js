import "./WeightPage.css"
import React, {useState} from "react"
import list from "../../svg/list-alt-regular.svg"
import DatePicker from "../../components/DatePicker";


const WeightPage = () => {
    return (
        <div className="weight-page">
            <div className="weight-page__content">
                <div className="weight-page__container">
                    <div className="weight-page__fill">
                        <h1>My Weight</h1>
                        <div className="weight-page__form">
                            <div className="wight-date__form">
                                <h3 className="form__header">Date:</h3>
                                <div className="form__input">
                                    <DatePicker/>
                                    <input className="form__input_input"/>
                                    <div className="form__input_button">

                                        <img src={list}/>
                                    </div>
                                </div>
                            </div>
                            <h3>Name eating:</h3>
                            <input/>
                            <button className="form__button_save">Save</button>
                        </div>
                    </div>
                    <div className="weight-page__statistics">
                        <h1>Statistics</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeightPage