//1.Избавиться от относительных ссылок - ../
//2.Правильно передавать пропсы
/*3.Правильно разместить файлы
components:
  header:
     ...
  menu:
    ...
constants:
   - menuList.js
<Link
  href={`${personalSpaceRoute}activities/unassigned`}
  title={t('common:sub-menu-unassigned-activities')}
>
GIT

git pull - Загрузить акутальные изменения из ветки (данные)

*/
import React, {Component} from 'react';

import MenuIcon from "./menu-nav/menu-icon";
import HeaderNav from "./header-nav/header-nav";

import {SectionItem} from './SectionItem'
import './pages.css'

import classnames from 'classnames'
import {HeaderItem} from "./header-nav/header-item";




export class StartPage extends Component {

    constructor(props) {
        super(props)
        this.listRef = [];
        this.state = {clicked: false}
        this.handleClick = this.handleClick.bind(this)
        this.sectionClick = this.sectionClick.bind(this)
        this.currentSection = SectionItem.map(
            (item) => {
               const ref = React.createRef()
               this.listRef.push(ref)
                return {
                    ...item,
                    ref,
                }
            }
        )
    }

    handleClick() {
        this.setState(state => ({
            clicked: !state.clicked
        }));
        document.body.style.overflow = this.state.clicked ? "unset" : "hidden"
    }

    sectionClick(index) {
        if (this.listRef[index] && this.listRef[index].current) {
            this.listRef[index].current.scrollIntoView({behavior: 'smooth'});
        }
    }

    render() {
        return (
            <div>
                <div className={classnames("wrapper", {"_lock": this.state.clicked})}>
                    <MenuIcon onActive={this.handleClick} clicked={this.state.clicked}/>
                    <HeaderNav clicked={this.state.clicked} sectionClick={this.sectionClick}/>
                    {this.currentSection.map((item, index) => {
                        return (
                            <section className={item.cName + "-section"} ref={item.ref}>
                                <div className={item.cName + "-section__content"}>
                                    {item.componentSection}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </div>
        )
    }
}



