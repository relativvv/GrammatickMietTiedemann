import React, {useState, useEffect} from 'react';
import './loginRegistration.scss';

const LoginRegistration = () => {
    return (
        <>
            <div className="container">
                <div className="login-container">
                    <div className="login">
                        <div className="form-headline">Login</div>
                        <form method="post" action="/tbd">
                            <div className="input-wrapper">
                                <input type="text" id="loginEmail" name="email" placeholder=" "/>
                                <label htmlFor="loginEmail">E-Mail</label>
                            </div>
                            <div className="input-wrapper">
                                <input type="password" id="loginPassword" name="password" placeholder=" " />
                                <label htmlFor="loginPassword">Passwort</label>
                            </div>
                            <div className="recover-password">
                                <a href="/">Password vergessen</a>
                            </div>
                            <button type="submit" className="btn btn-primary">Einloggen</button>
                        </form>
                    </div>
                    <div className="divider">
                        <div className="divider-inner" />
                    </div>
                    <div className="registration">
                        <div className="form-headline">Registrieren</div>
                        <form method="post" action="/tbd">
                            <div className="form-row">
                                <div className="input-wrapper col-6">
                                    <input type="text" id="firstname" name="firstname" placeholder=" " />
                                    <label htmlFor="firstname">Vorname</label>
                                </div>
                                <div className="input-wrapper col-6">
                                    <input type="text" id="lastname" name="lastname" placeholder=" " />
                                    <label htmlFor="lastname">Nachname</label>
                                </div>
                            </div>
                            <div className="input-wrapper">
                                <input type="email" id="registrationEmail" name="email" placeholder=" " />
                                <label htmlFor="registrationEmail">E-Mail</label>
                            </div>
                            <div className="form-row">
                                <div className="input-wrapper col-6">
                                    <input type="password" id="registrationPassword" name="password" placeholder=" " />
                                    <label htmlFor="registrationPassword">Passwort</label>
                                </div>
                                <div className="input-wrapper col-6">
                                    <input type="password" id="passwordRepeat" name="password-repeat" placeholder=" " />
                                    <label htmlFor="passwordRepeat">Passwort wiederholen</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-secondary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginRegistration;