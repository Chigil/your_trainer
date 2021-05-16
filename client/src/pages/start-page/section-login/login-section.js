import React, {Component} from 'react';
import './login-section.css'

const LoginSectionContent = () => {
    return (
        <React.Fragment>
            <div className="login_header">
                <h1>Lets <span className="login-color-text">start now</span></h1>
            </div>
            <div className="login-cart">
                <ul className="login_cart-list">
                    <li><p>Name:</p></li>
                    <li><input/></li>
                    <li><p>Password:</p></li>
                    <li><input/></li>
                    <li><p>Email</p></li>
                    <li><input/></li>
                    <li>
                        <button>Join Now</button>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default LoginSectionContent;



