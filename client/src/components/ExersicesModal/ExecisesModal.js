import React, {useContext, useEffect, useState} from 'react';
import './ExercisesModal.css'
import { observer } from "mobx-react-lite";
import ExerciseData from "../ExerciseData";
import {Context} from "../../index";
import PlusButton from "../Button/PlusButton";
import MinusButton from "../Button/MinusButton";


const ExercisesModal = observer(({onCloseModal}) => {
    const {training,snackBar} = useContext(Context)
    const [num,setNum] = useState(0)
    const [title,setTitle] = useState('')
    const [text,setText] = useState({})
    const [listExercises,setListExercises] = useState([]);

    const handleSetData = (number,currentData) => {
        setText({...text,[number]:currentData})
    }

    const addExercise = (num) => {
        setNum(num+1)
        console.log(num)
        listExercises.push(<ExerciseData setData={handleSetData} deleteData={deleteExercise} key={num} number={num}/>);
    }

    console.log(text)

    const deleteExercise = (num) =>{
        setText({...text})
        delete listExercises[num]
    }

    const handleCloseModal = async () => {
            training.exercises.push({title,text})
            snackBar.openSnackBar("success","Added")
            onCloseModal()
    }
    return (
        <React.Fragment>
                <h3>Create you Exercise</h3>
                <div className="wrapper-exercise">
                    <div className="wrapper-exercise_name">
                        <div>
                            <p>Exercise name</p>
                            <input className="exercise-name_input"
                                   value = {title}
                                   onChange={e=>setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <p>num</p>
                            <PlusButton onClick={() => addExercise(num)}/>
                        </div>
                    </div>
                    <div className="exercise-data">
                    {listExercises}
                    </div>
                </div>
                <button className="exercise__button_add" onClick={handleCloseModal}>Add</button>
        </React.Fragment>
    )
})
export default ExercisesModal;



