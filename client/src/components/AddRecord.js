import arrow from "../svg/arrow-circle-right-solid.svg";
import trash from "../svg/trash-alt-solid.svg";
import React, {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {deleteRecord, getRecord} from "../http/recordApi";


const AddRecord = observer(() =>{
    const {training} = useContext(Context)
    const delRecord = (id) =>{
        console.log(id)
        deleteRecord({id:id}).then(data=>{
            alert("Deleted")
            getRecord().then(data => training.removeRecord(id))

        })
    }
    return(<React.Fragment>
            {training.records.map(record =>
            <div className="review__container">
                <div className="review__container_name">{record.exercise_name}</div>
                <div className="review__container_weight">{record.weight}</div>
                <div className="review__container_num/min">{record.num}</div>
                <div className="review__container_date">{record.date}</div>
                <div><div className="review__container_view"><img src={arrow} alt="image"/></div></div>
                <div className="review__container_del"
                onClick={()=>delRecord(record.id)}>
                    <img src={trash} alt="image"/></div>
            </div>
        )}
        </React.Fragment>
    )

})
export default AddRecord