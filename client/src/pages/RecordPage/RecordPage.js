import "./RecordPage.css"
import React, {useState} from "react"
import trash from "../../svg/trash-alt-solid.svg"
import arrow from "../../svg/arrow-circle-right-solid.svg"
import {observer} from "mobx-react-lite";
import DatePicker from "../../components/DatePicker";


const RecordPage = observer(() => {
    const [date,setDate] = useState('')
    return (
        <div className="record-page">
            <div className="record-page__content">
                <div className="record-page__container">
                    <div className="record-page__fill">
                        <h1>My Record</h1>
                        <div className="record-page__form">
                            <h3>Exercise:</h3>
                            <input/>
                            <div className="weight__form_grid">
                                <div className="weight__fill_kg">
                                    <h3>Weight :</h3>
                                    <input/>
                                </div>
                                <div className="weight__fill_number">
                                    <h3>min/kg :</h3>
                                    <div className="weight__fill_number__num">1</div>
                                </div>
                            </div>
                            <div className="record-date__form">
                                <h3 className="form__header">Date:</h3>
                                <div className="form__input">
                                    <DatePicker
                                        date={date}
                                        setDate={setDate}
                                    />
                                </div>
                            </div>
                            <button className="form__button_save">Add</button>
                        </div>
                    </div>
                    <div className="table-record">
                        <h1>Statistics</h1>
                        <div className="table-record__review">
                            <div className="review__header">
                                <div className="review__header_name">Exercise</div>
                                <div className="review__header_weight">Weight</div>
                                <div className="review__header_num/min">Date</div>
                                <div className="review__header_date">Num/min</div>
                                <div className="review__header_view">View</div>
                                <div className="review__header_del">Trash</div>
                            </div>
                            <div className="review__container">
                                <div className="review__container_name">1</div>
                                <div className="review__container_weight">1</div>
                                <div className="review__container_num/min">1</div>
                                <div className="review__container_date">1</div>
                                <div className="review__container_view"><img src={arrow}/></div>
                                <div className="review__container_del"><img src={trash}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default RecordPage