import "./ProgramPage.css"
import React, {useContext, useState} from "react"
import arrowRight from "../../svg/arrow-circle-right-solid.svg"
import arrowLeft from "../../svg/arrow-circle-left-solid.svg"
import minus from "../../svg/minus-circle-solid.svg"
import ExercisesModal from "../../components/ExersicesModal/ExecisesModal";
import {createTraining, getTraining} from "../../http/trainingApi";
import DatePicker from "../../components/DatePicker";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import plus from "../../svg/plus-circle-solid.svg";
import ProgramExercise from "./ProgramExercise";



const ProgramPage = observer(() => {
    const {training, user, modal, snackBar} = useContext(Context)
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const addTraining = () => {
        createTraining({date: date, training_name: name, exercise_names: training.exercises,userId: user.id}).then(data => {
            getTraining().then(data => training.setTraining(data))
                    snackBar.openSnackBar("success","Created")
                    setDate('')
                    setName('')
            })
    }
    console.log(training.exercises)


    return (
        <div className="program">
            <div className="program__content">
                <div className="program__container">
                    <div className="program__fill">
                        <h1>My Program</h1>
                        <div className="data__container">
                        <DatePicker
                            date={date}
                            setDate={setDate}
                        />
                        </div>
                        <div className="program__form">
                            <div className="program__name">
                                <h3>Name Training:</h3>
                                <input
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <ProgramExercise/>
                            <div className="exercise-plus">
                                <img src={plus} alt="image" className="header_link"
                                     onClick={() => modal.openModal('ExercisesModal')}/>
                            </div>
                            <div className="exercise-minus">
                                <img src={minus}
                                     onClick={() => (training.exercises.pop())}
                                         alt="image"/>
                            </div>
                            <button
                                className="form__button_save"
                                onClick={addTraining}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="timetable">

                        <h1>Timetable</h1>
                        <div className="timetable__container">
                            <div className="timetable__nav">
                                <div className="timetable__nav_left"><img src={arrowLeft} alt="image"/></div>
                                <div className="timetable__nav_content">03/30 - 04/04</div>
                                <div className="timetable__nav_right"><img src={arrowRight} alt="image"/></div>
                            </div>
                            <div className="timetable__review">
                                <div className="timetable-review__header">
                                    <div className="review__header_name">Monday 03/29</div>
                                    <div className="review__header_weight">Tuesday 03/30</div>
                                    <div className="review__header_num/min">Wednesday 03/31</div>
                                    <div className="review__header_date">Thursday 04/01</div>
                                    <div className="review__header_view">Friday 04/02</div>
                                    <div className="review__header_del">Saturday 04/03</div>
                                    <div className="review__header_sun">Sunday 04/04</div>
                                </div>
                                <div className="timetable-review__container">
                                    <div className="review__container_name">someone</div>
                                    <div className="review__container_weight">someone</div>
                                    <div className="review__container_num/min">someone</div>
                                    <div className="review__container_date">someone</div>
                                    <div className="review__container_view">someone</div>
                                    <div className="review__container_del">someone</div>
                                    <div className="review__container_sun">someone</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ProgramPage