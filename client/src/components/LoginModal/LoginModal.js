import React, {useCallback, useContext, useState} from 'react';
import './LoginModal.css'
import {login, registration} from "../../http/userAPI";
import { observer } from "mobx-react-lite"
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import Modal from "react-modal";

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
        height: '450px',
        borderRadius: '15px'
    }};

const LoginModal = observer(() => {
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
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const openModal = useCallback(() => setIsOpen(true), []);
    const closeModal = useCallback(() => setIsOpen(false), []);
    const afterOpenModal = () =>{subtitle.style.color = '#740005';}
    return (
        <React.Fragment>
            <a className="header_link" onClick={openModal}>Login</a>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button className="close" onClick={closeModal}>X</button>
                <h2 ref={_subtitle => (subtitle = _subtitle)}>Login Your Account</h2>
                <p>Enter You Email</p>
                <input
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <p>Enter You Password</p>
                <input
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    type="password"
                />
                <button className="register" onClick={click}>Login</button>
            </Modal>
        </React.Fragment>
    )
})
export default LoginModal;



