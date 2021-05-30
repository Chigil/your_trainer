import "./ProgramPage.css"
import React, {useState} from "react"
import arrowRight from "../../svg/arrow-circle-right-solid.svg"
import arrowLeft from "../../svg/arrow-circle-left-solid.svg"
import minus from "../../svg/minus-circle-solid.svg"
import plus from "../../svg/plus-circle-solid.svg"
import AddExercise from "../../components/AddExercise";

const ProgramPage = () => {
    const [numExercise,setNumExercise] = useState(0)
    const children = [];

    for (let i = 0; i < numExercise; i += 1) {
        children.push(<AddExercise key={i} number={i}/>);
    };
    const addExerciseForm = () => {
        setNumExercise(numExercise+1)
    }
    const delExerciseForm = () =>{
        setNumExercise(numExercise-1)
    }
    return (
        <div className="program">
            <div className="program__content">
                <div className="program__container">
                    <div className="program__fill">
                        <h1>My Program</h1>
                        <div className="program__form">
                            <div className="program__name">
                                <h3>Name Training:</h3>
                                <input/>
                            </div>
                            {children}
                            <div className="exercise-plus"
                            onClick={()=>addExerciseForm()}>
                                <img src={plus}/>
                            </div>
                            <div className="exercise-minus"
                                 onClick={()=>delExerciseForm()}>
                                <img src={minus}/>
                            </div>
                            <button className="form__button_save">Save</button>
                        </div>
                    </div>
                    <div className="timetable">

                        <h1>Timetable</h1>
                        <div className="timetable__container">
                            <div className="timetable__nav">
                                <div className="timetable__nav_left"><img src={arrowLeft}/></div>
                                <div className="timetable__nav_content">03/30 - 04/04</div>
                                <div className="timetable__nav_right"><img src={arrowRight}/></div>
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
                                    <div className="review__container_name"></div>
                                    <div className="review__container_weight"></div>
                                    <div className="review__container_num/min"></div>
                                    <div className="review__container_date"></div>
                                    <div className="review__container_view"></div>
                                    <div className="review__container_del"></div>
                                    <div className="review__container_sun"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramPage