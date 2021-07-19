import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {getTraining, getTrainingById} from "../../../http/trainingApi";
import ProgramExercise from "../../../pages/ProgramPage/ProgramExercise";

const TrainingInfo = observer(({id}) => {

    const {training, snackBar, modal} = useContext(Context)
    useEffect(()=>{
        getTrainingById(modal._modalValues).then(data=>training.setInfo(data))
        console.log("dada")

    },[])
    console.log(training.info.exercise_names)
    return (
        <div>
            <div>Training:{training.info.training_name}</div>
            <ProgramExercise exercises={training.info.exercise_names}/>
        </div>
    );
});

export default TrainingInfo;