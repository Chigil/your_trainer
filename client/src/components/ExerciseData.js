import {useState} from "react";
import {observer} from "mobx-react-lite";

const ExerciseData = observer( ({data,setData}) => {
    const [kg,setKg] = useState(0)
    const [num,setNum] = useState(0)
    const text = {kg,num}

    console.log(text)
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
    </div>
    )
})
export default ExerciseData