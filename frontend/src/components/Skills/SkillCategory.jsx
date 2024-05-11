import React, { useState } from 'react';
import './SkillCategory.css';

function SkillCategory({ title, skills }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="skill-category">
            <div className="category-header" onClick={toggle}>
                {title}
                <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
            </div>
            {isOpen && (
                <ul className="skills-list">
                    {skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            )}
        </div>
    );
}

export default SkillCategory;
