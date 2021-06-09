import React, {Component, useContext} from 'react';
import classnames from 'classnames'

import {HeaderItem} from './header-item'

import './header-nav.css';
import LoginModal from "../../../components/LoginModal/LoginModal";
import MyModal from "../../../components/MyModal";
import {Context} from "../../../index";



const HeaderNav = (props) => {
    const {modal} = useContext(Context)
    return (
        <nav className={classnames("header_nav", {"_active": props.clicked})}>
            <ul className="header_list ">
                {HeaderItem.map((item, index) => {
                    return (
                        <li className="header_item">
                            <a
                                data-goto={".page__section_" + index}
                                className={item.cName}
                                onClick={()=>props.sectionClick(index)}
                            >
                                {item.title}
                            </a>
                        </li>
                    )
                })}
                    <li className="header_item">
                        <a
                            onClick={()=>modal.openModal("LoginModal")}
                        >Login
                        </a>
                    </li>
            </ul>
        </nav>
    )
}
export default HeaderNav;