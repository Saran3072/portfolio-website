import React from 'react';
import './Header.css';
import logoImage from '../../assets/Logo-Without-BG.png';

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Your Logo" className="logo-image"/>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#research">Research</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
