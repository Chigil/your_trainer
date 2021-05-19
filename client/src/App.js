import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {StartPage} from "./pages/start-page/container-main";
import {BrowserRouter, Route} from "react-router-dom";

import GoPage from "./pages/GoPage/GoPage";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {observer} from "mobx-react-lite";

const App = observer(()=>{
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect( ()=>{
        check().then(data=>{
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(()=> setLoading(false))
    },[])

    if (loading){
        console.log("hi")
    }
    return (
        <BrowserRouter>
            <Route path='' component={StartPage}/>
            <Route path='/go' component={GoPage}/>
        </BrowserRouter>
    );
});

export default App;
