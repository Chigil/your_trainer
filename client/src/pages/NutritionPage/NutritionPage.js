import "./NutritionPage.css"
import React from "react"

import list from "../../svg/list-alt-regular.svg"
import trash from "../../svg/trash-alt-solid.svg"

const NutritionPage = () => {
    return (
        <React.Fragment>
            <div className="nutrition-page">
                <div className="nutrition-page__content">
                    <h1>Nutrition</h1>
                    <div className="nutrition-page__container">
                        <div className="nutrition-page__fill">
                            <h3 className="fill-date__header">Date:</h3>
                            <div className="fill-date__container">
                                <input className="fill-date__input"/>
                                <div className="fill-date__button"><img src={list}/></div>
                            </div>
                            <div className="calories__form">
                                <ul className="calories__items">
                                    <li className="calories__item">
                                        <h3>Name eating:</h3>
                                        <input/>
                                    </li>
                                    <li className="calories__item">
                                        <h3>Calories:</h3>
                                        <input/>
                                    </li>
                                </ul>
                                <button className="calories__button_save">Add</button>
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
}
export default NutritionPage