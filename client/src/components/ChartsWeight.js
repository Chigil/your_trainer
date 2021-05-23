import React, {useState} from 'react'
import {Line} from 'react-chartjs-2'

const ChartsWeight = () =>{
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
                    labels:["02","03","04","05"],
                    datasets:[
                        {
                            label:"Weight",
                            data:[99,92,92,76],
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