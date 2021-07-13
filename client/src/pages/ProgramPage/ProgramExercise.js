import React, {useContext} from "react";
import ProgramPage from "./ProgramPage";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const parseExercise = (data) => {
    const values = Object.values(data)
    return (
        <div>
            {values.map((el,num)=>{
                return(
                <div>{num+1} - approach
                    <div>kg:{el.kg}</div>
                    <div>num:{el.num}</div>
                </div>
                )
            })}
        </div>
    )
}

const ProgramExercise = observer(() => {
    const {training} = useContext(Context)
    return (
        <div style={{display:"flex",width:"100%",flexDirection:"column"}}>
            {training.exercises.map(ex => {
                    console.log(training.exercises)
                    console.log(ex.data)
                    return (
                        <div>
                            Exercises: {ex.name}
                            <div>{parseExercise(ex.data)}
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
})
export default ProgramExercise