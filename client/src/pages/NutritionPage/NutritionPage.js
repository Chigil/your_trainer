import "./NutritionPage.css"
import React, {useContext, useState} from "react"

import DatePicker from "../../components/DatePicker";
import {observer} from "mobx-react-lite";
import NutritionCalories from "../../components/NutritionCalories";
import {createNutrition, getNutrition} from "../../http/nutritionApi";
import {Context} from "../../index";

const NutritionPage = observer(() => {
    const {training} = useContext(Context)
    const [date, setDate] = useState('')
    const [name,setName] = useState('')
    const [calories,setCalories] = useState('')
    const addNutrition =  () => {
        createNutrition({date: date, name_nutrition: name, calories: calories}).then(data => {
            alert("Добавлено")
            getNutrition().then(data => training.setNutrition(data))
            setDate('')
            setName('')
            setCalories('')
        })
    }

    return (
        <React.Fragment>
            <div className="nutrition-page">
                <div className="nutrition-page__content">
                    <h1>Nutrition</h1>
                    <div className="nutrition-page__container">
                        <div className="nutrition-page__fill">
                            <h3 className="fill-date__header">Date:</h3>
                            <div className="fill-date__container">
                                <DatePicker
                                    date={date}
                                    setDate={setDate}
                                />
                            </div>
                            <div className="calories__form">
                                <ul className="calories__items">
                                    <li className="calories__item">
                                        <h3>Name eating:</h3>
                                        <input
                                            value={name}
                                            onChange={e=>setName(e.target.value)}
                                        />
                                    </li>
                                    <li className="calories__item">
                                        <h3>Calories:</h3>
                                        <input
                                            value={calories}
                                            onChange={e=>setCalories(e.target.value)}
                                        />
                                    </li>
                                </ul>
                                <button
                                    className="calories__button_save"
                                    onClick={addNutrition}
                                >Add</button>
                            </div>
                        </div>
                        <div className="nutrition-page__review">
                            <div className="nutrition-review__name">
                                <div className="nutrition-review__header_food-name">
                                    Food name:
                                </div>
                                <div className="nutrition-review__header_calories">
                                    calories:
                                </div>
                            </div>
                            <div className="nutrition-review__content">
                                <NutritionCalories/>
                            </div>
                            <div className="nutrition-review__result">
                                <div className="nutrition-review__header_total">
                                    Total Calories:
                                </div>
                                <div className="nutrition-review__number_total">
                                    2600
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})
export default NutritionPage