import React, {useState} from 'react'
import {Line} from 'react-chartjs-2'

const ChartsWeight = ({weightData}) =>{
    let labelDate = []
    let labelWeight = []
    weightData.forEach((el)=>{
        labelDate.push(el.date)
        console.log(el.date)
        labelWeight.push(el.weight)
        console.log(el.weight)
    })
    return(
        <div style={
            {   backgroundColor:'rgba(255, 255, 255, 0.5)',
                height:600,
                width: 700,
                borderRadius:'15px'
            }
        }>
            <Line

                data = {{
                    labels:labelDate,
                    datasets:[
                        {
                            label:"Weight",
                            data:labelWeight,
                            backgroundColor:'red'
                        },
                    ]
                }}
                height = {600}
                width = {700}
            />
        </div>
    )
}
export default ChartsWeight