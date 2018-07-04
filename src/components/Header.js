import React, { Component } from "react";

export const Header = () => {
    return (
        <header className="app-header">
            <h1 className="app-title">Government Contact</h1>

            <p className="app-desc">
                Search for the people who serve you. Take action, and contact
                them over issues you care about
            </p>
            <div className="img-container logo-img">
                <img
                    className="pop-up"
                    src="img/logo.svg"
                    alt="gov-contact logo"
                />
            </div>
        </header>
    );
};
