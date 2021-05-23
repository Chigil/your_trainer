import './NavigationBar.css';

import React, {useContext, useState} from "react";
import {NavigationBarItem} from "./NavigationBarItem"
import {NavLink,useHistory} from "react-router-dom";
import {Context} from "../../index";


const NavigationBar = (props) => {
    const history = useHistory()
    // Create Button for Exit from userPage
    const {user} = useContext(Context)
    //const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        history.push('/')
    }
    const [toggleState, setToggleState] = useState("");

    function toggle() {
        setToggleState(toggleState === "" ? "active" : "");
    }

    return (
        <React.Fragment>
            <div className={`navigation ${toggleState}`}>
                <ul>
                    {NavigationBarItem.map((item, index) => {
                        return (
                            <li>
                                <NavLink to={`/go${item.href}`}>
                                    <span className="icon"><i className={`fa fa-${item.cName}`}
                                                              aria-hidden="true"/></span>
                                    <span className="title">{item.title}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                    <li>
                        <a><NavLink to={'/'}>
                                <span onClick={() => {
                                    logOut()
                                }} className="icon"><i className={`fa fa-sign-out`} aria-hidden="true"/></span>
                                <span onClick={() => {
                                    logOut()
                                }} className="title">{"Exit"}</span>
                            </NavLink>
                        </a>
                    </li>
                </ul>
                <span className={`toggle ${toggleState}`} onClick={toggle}/>
            </div>
        </React.Fragment>
    )
}

export default NavigationBar

