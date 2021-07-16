import {useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import MinusButton from "./Button/MinusButton";


const ExerciseData = observer( ({setData,number,deleteData}) => {
    const [kg,setKg] = useState(0)
    const [num,setNum] = useState(0)
    useEffect(() => {
        setData(number,{kg,num})
    }, [kg,num])

    useEffect(() => {
        deleteData(number)
    }, [number])

    return(
    <div className="exercise-data_content">
        <div>
            <p>kg</p>
            <input className="input"
                   value = {kg}
                   onChange={e=>setKg(e.target.value)}
            />
        </div>
        <div>
            <p>num</p>
            <input className="input"
                   value = {num}
                   onChange={e=>setNum(e.target.value)}
            />
        </div>
        <div style={{display:'flex',alignItems:'flex-end'}}>
            <MinusButton onClick={deleteData(number)}/>
        </div>
    </div>
    )
})
export default ExerciseData