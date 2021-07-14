import React, {useContext} from "react";
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
                    console.log(ex.text)
                    return (
                        <div>
                            Exercises: {ex.title}
                            <div>{parseExercise(ex.text)}
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    )
})
export default ProgramExercise