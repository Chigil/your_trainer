import React, {useCallback, useContext, useState} from 'react';
import './LoginModal.css'
import {login, registration} from "../../http/userAPI";
import { observer } from "mobx-react-lite"
import {Context} from "../../index";
import {NavLink,useLocation, useHistory} from "react-router-dom";
import {APP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, START_ROUTE} from "../../utils/consts";

const LoginModal = observer(({onCloseModal}) => {
    const location = useLocation()
    const {user} = useContext(Context)
    const [email,setEmail] = useState('')
    const history = useHistory()
    const [password,setPassword] = useState('')
    const isLogin = location.pathname === START_ROUTE+LOGIN_ROUTE
    const handleCloseModal = async () => {
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
            onCloseModal()
            user.setUser(user)
            user.setIsAuth(true)
            history.push(APP_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }
    }
    return (
        <React.Fragment>
            <a className="header_link">Join</a>
                <button className="close" onClick={onCloseModal}>X</button>
                <h3>{isLogin? "Login Your Account":"Register Your Account"}</h3>
                <p>Enter Your Email</p>
                <input
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <p>Enter Your Password</p>
                <input
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    type="password"
                />
                {isLogin ?
                    <div>
                        Don't have an account? <NavLink to={START_ROUTE+REGISTRATION_ROUTE}> Register now! </NavLink>
                    </div>
                    :
                    <div>
                        Have an account? <NavLink to={START_ROUTE+LOGIN_ROUTE}> Login! </NavLink>
                    </div>
                }
                <button className="register" onClick={handleCloseModal}>{isLogin? "Login":"Register"}</button>
        </React.Fragment>
    )
})
export default LoginModal;



