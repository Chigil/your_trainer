import "./History.css"
import React from "react"
import arrow from "../../svg/arrow-circle-right-solid.svg"
import list from "../../svg/list-alt-regular.svg"
const History = () => {
    return (
        <div className="history">
            <div className="history__content">
                <h1>History</h1>
                <div className="history__container">
                    <div className="history__fill">
                        <h3 className="fill-date__header">Date:</h3>
                        <div className="fill-date__container">
                            <input className="fill-date__input"/>
                            <div className="fill-date__button"><img src={list}/></div>
                        </div>
                    </div>
                    <div className="history-page__review">
                        <div className="history-review__name">
                            <div className="review__header header_training">Training:</div>
                            <div className="review__header header_eating">Eating:</div>
                            <div className="review__header header_weight">Weight:</div>
                            <div className="review__header header_record">Record:</div>
                        </div>
                        <div className="history-review__content">
                            <div className="history-review__container">
                                <div className="history-review__header_food-name">Жим лёжа</div>
                                <div className="history-review__button_delete"><img src={arrow}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History