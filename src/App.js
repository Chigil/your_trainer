import React, {Component} from 'react';
import './App.css';
import {StartPage} from "./pages/start-page/container-main";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {BrowserRouter, Route} from "react-router-dom";
import NutritionPage from "./pages/NutritionPage/NutritionPage";
import WeightPage from "./pages/WeightPage/WeightPage";

function App() {
    return (
        <BrowserRouter>
            <StartPage/>
            <NavigationBar/>
            <Route path='/nutrition' component={NutritionPage}/>
            <Route path='/weight' component={WeightPage}/>

        </BrowserRouter>
    );
}

export default App;
