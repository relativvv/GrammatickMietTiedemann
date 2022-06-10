import React from "react";
import './header.scss';

// @ts-expect-error ogwief
const Header = ({ setShowLogin }) => (
    <>
        <header className="header">
            <div className="header-inner">
                <h1>Gramatick miet Tidemann</h1>
            </div>
        </header>
        <div className="header-bar">
            <button
                className="header-bar__login-button btn btn-primary"
                onClick={() => {
                    setShowLogin(true);
                }}
            >
                Login
            </button>
        </div>
    </>
);

export default Header;
