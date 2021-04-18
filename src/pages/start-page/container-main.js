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
*/
import React, {Component} from 'react';

import MenuIcon from "../../menu-nav/menu-icon";
import HeaderNav from "../../header-nav/header-nav";
import CalculatePageContent from "./section-calculate/calculate-section";
import NutritionSectionContent from "./section-nutrition/nutrition-section";
import LoginSectionContent from "./section-login/login-section";
import WorkoutSectionContent from "./section-workout/workout-section";
import LandingSectionContent from "./section-landing/landing-section";

import './pages.css'

import classnames from 'classnames'

export class StartPage extends Component {

    constructor(props) {
        super(props);
        this.sectionRef = React.createRef();
        this.state = { clicked:false }
        this.handleClick = this.handleClick.bind(this)
        this.sectionClick = this.sectionClick.bind(this)
    }
    handleClick(){
        this.setState(state=>({
            clicked: !state.clicked
        }));
        document.body.style.overflow = this.state.clicked?"unset":"hidden"
    }
    sectionClick(){
            this.handleClick()
            if (this.sectionRef && this.sectionRef.current) {
            this.sectionRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }
    render() {
        return (
            <div>
                <div className={classnames("wrapper",{"_lock":this.state.clicked})}>
                    <MenuIcon  onActive={this.handleClick} clicked={this.state.clicked}/>
                    <HeaderNav clicked={this.state.clicked} sectionClick={this.sectionClick}/>
                    <section className="landing-section page__section_1" ref = {this.sectionRef} >
                        <div className="landing-section__content">
                            <LandingSectionContent/>
                        </div>
                    </section>
                    <section className="workouts-section page__section_2" ref = {this.sectionRef}>
                        <div className="workouts-section__content">
                            <WorkoutSectionContent/>
                        </div>
                    </section>
                    <section className="nutrition-section page__section_3" ref = {this.sectionRef}>
                        <div className="nutrition-section__content">
                            <NutritionSectionContent/>
                        </div>
                    </section>
                    <section className="calculate-section page__section_4" ref = {this.sectionRef}>
                        <div className="calculate-section__content">
                            <CalculatePageContent/>
                        </div>
                    </section>
                    <section className="login-section page__section_5" ref = {this.sectionRef}>
                        <div className="login-section__content">
                            <LoginSectionContent/>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

