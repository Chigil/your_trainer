import React, {Component} from 'react';
import './App.css';
import {StartPage} from "./pages/start-page/container-main";
import {BrowserRouter, Route} from "react-router-dom";

import GoPage from "./pages/GoPage/GoPage";

function App() {
    return (
        <BrowserRouter>
            <Route path='' component={StartPage}/>
            <Route path='/go' component={GoPage}/>
        </BrowserRouter>
    );
}

export default App;
