import React from 'react';
import './About.css';
import Stats from '../Stats/Stats'

function About() {
    return (
        <div className="about-section" id="about">
            <h2 className="about-heading">About Me</h2>
            <p className="about-text">
                I am a passionate Machine Learning Engineer with a robust background in data science and artificial intelligence. With experience in developing predictive models and insightful analytics solutions across various industries, I thrive on challenges that require innovative thinking and complex problem-solving skills. Outside of work, I enjoy exploring advancements in AI research and contributing to open-source projects.
            </p>
            <Stats />
        </div>
    );
}

export default About;
