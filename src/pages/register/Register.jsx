import React from 'react';
import './register.css';

const Register = () => {
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
                        <input placeholder="Username" type="Email" className="loginInput" />
                        <input placeholder="Email" type="Email" className="loginInput" />
                        <input placeholder="Password" type="Email" className="loginInput" />
                        <input placeholder="Confirm Password" type="Password" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log In to Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;