import "./News.css"
import React, {useContext} from "react"
import {Context} from "../../index";

const News = () => {
    const {snackBar} = useContext(Context)
    return (
        <div className="news">

            <div className="news__content">
                <h1>Name</h1>
                <h1>Franko</h1>
                <h1>Fullname</h1>
                <h1>Kolins</h1>
                <div className="news__container">
                    <div className="news-page__review">
                        <div className="review__name">
                            <div className="review__header_training">Training:</div>
                            <div className="review__header_eating">Eating:</div>
                            <div className="review__header_weight">Weight:</div>
                            <div className="review__header_record">Record:</div>
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