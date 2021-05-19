import React, { useState } from "react";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

function DatePicker() {
    const [date, setDate] = useState(null);
    const [focused,setFocused] = useState(false);
    const onFocusChange = () => setFocused(!focused);

    return (
        <div className="App">
            <SingleDatePicker
                date={date} // momentPropTypes.momentObj or null
                onDateChange={date => setDate(date)} // PropTypes.func.isRequired
                focused={focused} // PropTypes.bool
                onFocusChange={onFocusChange}// PropTypes.func.isRequired
                id="your_unique_id" // PropTypes.string.isRequired,
            />
        </div>
    );
}

export default DatePicker;