import React, {useState, useEffect} from 'react';
import './loginRegistration.scss';

const LoginRegistration = () => {
    return (
        <>
            <div className="container">
                <div className="login-container">
                    <div className="login">
                        <div className="form-headline">Login</div>
                        <form method="post">
                            <div className="input-wrapper">
                                <input type="text" id="email" name="email" placeholder=" " />
                                <label htmlFor="username">E-Mail</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" id="password" name="password" placeholder=" " />
                                <label htmlFor="username">Password</label>
                            </div>
                            <button type="submit" className="btn btn-success">Login</button>
                        </form>
                    </div>
                    <div className="divider">
                        <div className="divider-inner" />
                    </div>
                    <div className="registration">
                        <div className="form-headline">Registration</div>
                        <form method="post">
                            <div className="input-wrapper">
                                <input type="text" id="firstname" name="firstname" placeholder=" " />
                                <label htmlFor="username">Firstname</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" id="lastname" name="lastname" placeholder=" " />
                                <label htmlFor="username">Lastname</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" id="email" name="email" placeholder=" " />
                                <label htmlFor="username">E-Mail</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" id="password" name="password" placeholder=" " />
                                <label htmlFor="username">Password</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="text" id="password-repeat" name="password-repeat" placeholder=" " />
                                <label htmlFor="username">Repeat password</label>
                            </div>
                            <button type="submit" className="btn btn-success">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRegistration;