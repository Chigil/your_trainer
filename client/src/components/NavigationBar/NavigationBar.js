import './NavigationBar.css';

import React, { useState } from "react";
import {NavigationBarItem} from "./NavigationBarItem"
import {BrowserRouter, NavLink, Route} from "react-router-dom";


const NavigationBar = (props) =>{
    const [toggleState, setToggleState] = useState("");

    function toggle() {
        setToggleState(toggleState === "" ? "active" : "");
    }
    return(
        <React.Fragment>
            <div className={`navigation ${toggleState}`}>
                <ul>
                    {NavigationBarItem.map((item, index ) => {
                    return(
                    <li>
                        <NavLink to={`/go${item.href}`}>
                            <span className="icon"><i className={`fa fa-${item.cName}`} aria-hidden="true"/></span>
                            <span className="title">{item.title}</span>
                        </NavLink>
                    </li>
                    )
                })}
                </ul>
                <span className={`toggle ${toggleState}`} onClick={toggle}/>
            </div>
        </React.Fragment>
    )
}

export default NavigationBar

