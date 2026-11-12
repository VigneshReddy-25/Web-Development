
import React from 'react';
import logo from './Asserts/Radipo_Logo.png';

function Nav() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-white"
            aria-label="Main navigation"
        >
            <div className="container">

                {/* Rapido Logo */}
                <a className="navbar-brand" href="#home">
                    <img src={logo} alt="Rapido logo" />
                </a>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar2"
                    aria-controls="offcanvasNavbar2"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Menu */}
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasNavbar2"
                    aria-labelledby="offcanvasNavbar2Label"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbar2Label"
                        >
                            Menu
                        </h5>

                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 contain">
                            <li className="nav-item">
                                <a
                                    className="nav-link active header-a"
                                    aria-current="page"
                                    href="#home"
                                >
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    About Us
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#safety">
                                    Safety
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#careers">
                                    Careers
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#blog">
                                    Blog
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#press">
                                    Press
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact">
                                    Contact Us
                                </a>
                            </li>
                        </ul>

                        {/* Black Download App Button */}
                        <button
                            className="header-btn"
                            type="button"
                        >
                            Download App
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
