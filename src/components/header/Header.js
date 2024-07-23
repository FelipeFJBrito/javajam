import React from "react";
import logo from "../../assets/logo.png"
import { links } from "../../Data";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav-logo">
                    <h1>JavaJam Coffee Bar</h1>
                </a>

                <div className="nav-menu">
                    <ul className="nav-list">
                        {links.map(({ name, path }, index) => {
                            return (
                                <li className="nav-item" key={index}>
                                    <a href={path} className="nav-link">
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="nav-toggle">
                    <GiHamburgerMenu />
                </div>
            </nav>
        </header>

    );
}

export default Header;