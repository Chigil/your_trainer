import "./WeightPage.css"
import React from "react"

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
                                <input className="form__input"/>
                                <span className="form__button">DATE</span>
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