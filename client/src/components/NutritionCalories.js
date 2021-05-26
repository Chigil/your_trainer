import trash from "../svg/trash-alt-solid.svg";
import {useContext, useState} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {deleteNutrition, getNutrition} from "../http/nutritionApi";


const NutritionCalories = observer(() => {
    const {training} = useContext(Context)
    const [id,setId] = useState('')
    const delNutrition = () =>{
        console.log(id)
        setId(id)
        deleteNutrition({id:id}).then(data=>{
            alert("Deleted")
            getNutrition().then(data => training.removeNutrition(data))
        })
    }
    return (<div>
            {training.nutrition.map(nutrition =>
            <div className="nutrition-review__container"
                key={nutrition.id}>
                <div className="nutrition-review__header_food-name">
                    {nutrition.name_nutrition}
                </div>
                <div className="nutrition-review__calories_number">
                    {nutrition.calories}
                </div>
                <div className="nutrition-review__button_delete"
                     id = {nutrition.id}
                    onClick={delNutrition}>
                    <img src={trash}/>
                </div>
            </div>
        )}
    </div>)

})
export default NutritionCalories
