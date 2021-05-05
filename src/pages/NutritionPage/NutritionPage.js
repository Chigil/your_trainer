import "./NutritionPage.css"
import React from "react"

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
                            <span className="fill-date__button">DATE</span>
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
                        <div className="review__name">
                            <div className="review__header_food-name">
                                Food name:
                            </div>
                            <div className="review__header_calories">
                                calories:
                            </div>
                        </div>
                        <div className="review__content">
                            <div className="review__container">

                                <div className="review__header_food-name">
                                    1 breakfrest
                                </div>
                                <div className="review__calories_number">
                                    700
                                </div>

                                <div className="review__button_delete">
                                    <span>DEL</span>
                                </div>
                            </div>

                        </div>

                        <div className="review__result">
                            <div className="review__header_total">
                                Total Calories
                            </div>
                            <div className="review__number_total">
                                2600:
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