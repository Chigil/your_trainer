import React, {Component} from 'react';
import classnames from 'classnames'

import {HeaderItem} from './header-item'

import './header-nav.css';


const HeaderNav = (props) => {
    return (
        <nav className={classnames("header_nav", {"_active": props.clicked})}>
            <ul className="header_list ">
                {HeaderItem.map((item, index) => {
                    return (
                        <li className="header_item">
                            <a
                                data-goto={".page__section_" + index}

                                className={item.cName}
                                onClick={props.sectionClick}
                            >
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
export default HeaderNav;