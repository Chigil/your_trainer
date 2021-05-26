import trash from "../svg/trash-alt-solid.svg";
import {useContext} from "react";
import {Context} from "../index";


const NutritionCalories = () => {
    const {training} = useContext(Context)
    return (
        <div className="nutrition-review__container">
            <div className="nutrition-review__header_food-name">
                1 breakfrest
            </div>
            <div className="nutrition-review__calories_number">
                700
            </div>
            <div className="nutrition-review__button_delete">
                <img src={trash}/>
            </div>
        </div>
    )
}
export default NutritionCalories
