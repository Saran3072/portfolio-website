import React, { useState, useEffect } from 'react';
import './Header.css';
import logoImage from '../../assets/Logo-Without-BG.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false); 
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNavbar = () => {
        if (isMobile) {
            setIsOpen(!isOpen); // Only toggle if on mobile view
        }
    };

    return (
        <header className="header">
            <div className="logo" onClick={toggleNavbar}> 
                <img src={logoImage} alt="Your Logo" className="logo-image"/>
                {isMobile && <div className="toggle-icon">{isOpen ? 'O' : 'O'}</div>} {/* Show toggle icon only on mobile */}
            </div>
            {(isOpen || !isMobile) && (  // Only conditionally render navbar based on state or screen size
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
            )}
        </header>
    );
}

export default Header;
