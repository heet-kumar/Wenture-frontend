import React from 'react';
import './login.css';

const Login = () => {
    return(
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Wenture</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Wenture.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" type="Email" className="loginInput" />
                        <input placeholder="Password" type="Password" className="loginInput" />
                        <button className="loginbutton">Log In</button>
                        <span className="loginForget">Forget Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;