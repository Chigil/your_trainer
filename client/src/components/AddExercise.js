import React from "react"

const AddExercise = () => {
    return(
        <div className="weight__form_grid">
            <div className="weight__fill_kg">
                <h3>exercise:</h3>
                <input/>
            </div>
            <div className="weight__fill_number">
                <h3>min/kg :</h3>
                <input className="weight__fill_number__num"/>
            </div>
        </div>
    )

}
export default  AddExercise