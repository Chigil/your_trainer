import "./News.css"
import React, {useContext} from "react"
import {Context} from "../../index";
import Validator from "../../components/Validator";

const News = () => {
    const {snackBar} = useContext(Context)
    return (
        <div className="news">

            <div className="news__content">
                <h1>Andrei</h1>
                <h1>Chigileychik</h1>
                <div className="news__container">
                    <div className="news-page__img">img</div>
                    <div className="news-page__review">
                        <div className="review__name">
                            <div className="review__header_training">Total workouts:</div>
                            <div className="review__header_eating">Total calories:</div>
                            <div className="review__header_weight">Number of weighings:</div>
                            <div className="review__header_record">Number of records:</div>
                        </div>
                        <div className="review__content">
                            <div className="review__header_training">Training:</div>
                            <div className="review__header_eating">Eating:</div>
                            <div className="review__header_weight">Weight:</div>
                            <div className="review__header_record">Record:</div>
                        </div>
                    </div>
                    <div className="review__news"
                           onClick={()=>snackBar.openSnackBar("error","Incorrect Email")}
                         >
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News