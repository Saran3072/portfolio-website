import React from 'react';
import './Home.css';
import profilePic from '../../assets/image.jpg'; // Update path to your image
import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg'; // Ensure you have this SVG in your project
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'; // Ensure you have this SVG in your project
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg'; // Ensure you have this SVG in your project

function Home() {
    return (
        <div className="home-section" id="home">
            <img src={profilePic} alt="Your Name" className="profile-pic"/>
            <div className="intro-text">
            <h1>Hi, I'm <span className="name">Sai Saran Dammavalam</span></h1>
            <h2 className="subtitle">Machine Learning Engineer</h2> 
                <p>22 | Machine Learning | Artificial Intelligence | Data Science | Backend | Freelance</p>
            </div>
            <div className="social-media">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><LinkedInIcon className="icon"/></a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><InstagramIcon className="icon"/></a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><TwitterIcon className="icon"/></a>
            </div>
        </div>
    );
}

export default Home;