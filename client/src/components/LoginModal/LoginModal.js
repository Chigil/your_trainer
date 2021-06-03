import React, {useCallback, useContext, useState} from 'react';
import './LoginModal.css'
import {login, registration} from "../../http/userAPI";
import { observer } from "mobx-react-lite"
import {Context} from "../../index";
import {NavLink,useLocation, useHistory} from "react-router-dom";
import Modal from "react-modal";
import {APP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, START_ROUTE} from "../../utils/consts";

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.25)'
    },
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        fontSize              : '22px',
        width: '350px',
        height: '520px',
        borderRadius: '15px'
    }};

const LoginModal = observer(() => {
    const location = useLocation()
    const {user} = useContext(Context)
    const [email,setEmail] = useState('')
    const history = useHistory()
    const [password,setPassword] = useState('')
    const isLogin = location.pathname === START_ROUTE+LOGIN_ROUTE
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
            history.push(APP_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }
    }
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const afterOpenModal = () =>{subtitle.style.color = '#740005';}
    return (
        <React.Fragment>
            <a className="header_link" onClick={openModal}>Join</a>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="close" onClick={closeModal}>X</button>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>{isLogin? "Login Your Account":"Register Your Account"}</h2>
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
                <button className="register" onClick={click}>{isLogin? "Login":"Register"}</button>
            </Modal>
        </React.Fragment>
    )
})
export default LoginModal;



