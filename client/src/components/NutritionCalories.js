import trash from "../svg/trash-alt-solid.svg";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {deleteNutrition, getNutrition} from "../http/nutritionApi";
//Использовать get (Избивиться от фильтра)

const NutritionCalories = observer(() => {
    const {training,snackBar} = useContext(Context)
    const delNutrition = (id) =>{
        console.log(id)
        deleteNutrition({id:id}).then(data=>{
            snackBar.openSnackBar("info","Deleted")
            getNutrition().then(data => training.removeNutrition(id))

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
                        onClick={()=>delNutrition(nutrition.id)}>
                    <img src={trash} alt="image"/>
                </div>
            </div>
        )}
    </div>)

})
export default NutritionCalories
