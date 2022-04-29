import React, {useState, useEffect} from 'react';
import './loginRegistration.scss';

class loginRegistrationForm extends React.Component {

    
    render(): React.ReactNode {
        return(
            <div className='container'>
                <div className='login'>
                    <span>Login</span>
                    <form>
                        <div className='username'>
                            <input></input>
                        </div>
                        <div className='password'>
                            <input></input>
                        </div>
                        <button type='submit'>Submit Login</button>
                    </form>
                </div>
                <div className='registration'>
                    <span>Registration</span>
                    <form>
                        <div className='email'>
                            <input></input>
                        </div>
                        <div className='username'>
                            <input></input>
                        </div>
                        <div className='password'>
                            <input></input>
                        </div>
                        <div className='firstname'>
                            <input></input>
                        </div>
                        <div className='lastname'>
                            <input></input>
                        </div>
                        <button type='submit'>Submit Registration</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default loginRegistrationForm