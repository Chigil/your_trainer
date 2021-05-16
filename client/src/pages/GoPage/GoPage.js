import "./GoPage.css"
import React from "react"
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import {BrowserRouter, Route} from "react-router-dom";
import NutritionPage from "../NutritionPage/NutritionPage";
import WeightPage from "../WeightPage/WeightPage";
import RecordPage from "../RecordPage/RecordPage";
import ProgramPage from "../ProgramPage/ProgramPage";
import News from "../News/News";
import History from "../HistoryPage/History";


const GoPage = () => {
    return (
        <BrowserRouter>
            <div className="go-page">
                <NavigationBar/>
                <Route path='/go/nutrition' render={() => <NutritionPage/>}/>
                <Route path='/go/weight' render={() => <WeightPage/>}/>
                <Route path='/go/record' render={() => <RecordPage/>}/>
                <Route path='/go/program' render={() => <ProgramPage/>}/>
                <Route path='/go/news' render={() => <News/>}/>
                <Route path='/go/history' render={() => <History/>}/>
            </div>
        </BrowserRouter>
    )
}

export default GoPage
