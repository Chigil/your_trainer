import React, {Component, useContext, useState} from 'react';
import './login-section.css'
import {login, registration} from "../../../http/userAPI";
import { observer } from "mobx-react-lite"
import {Context} from "../../../index";
import {NavLink,useHistory} from "react-router-dom";



const LoginSectionContent = observer(() => {
    const {user} = useContext(Context)
    const [email,setEmail] = useState('')
    const history = useHistory()
    const [password,setPassword] = useState('')
    const isLogin = true
    const click = async () =>{
        try{
            let data;
            if(isLogin){
                data = await login(email,password)
                console.log(data)
            }
            else{
                data = await registration(email,password)
                console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push('/go')
        } catch (e){
            alert(e.response.data.message)
        }
    }
    return (
        <React.Fragment>
            <div className="login_header">
                <h1>Lets <span className="login-color-text">start now</span></h1>
            </div>
            <div className="login-cart">
                <ul className="login_cart-list">
                    <li><p>Name:</p></li>
                    <li><input/></li>
                    <li><p>Email:</p></li>
                    <li><input
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                    /></li>
                    <li><p>Password:</p></li>
                    <li><input
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        type="password"
                    /></li>
                    <li>
                        <button onClick={click}>Join Now</button>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
})
export default LoginSectionContent;



