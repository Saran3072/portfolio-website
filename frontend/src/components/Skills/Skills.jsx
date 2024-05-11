import React from 'react';
import SkillCategory from './SkillCategory';
import './Skills.css';

const skillCategories = [
    { id: 1, title: 'AI & Data Science', skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Data Visualization'] },
    { id: 2, title: 'Programming', skills: ['Python', 'C/C++', 'Java'] },
    { id: 3, title: 'Front End', skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { id: 4, title: 'Back End', skills: ['Node.js', 'Express', 'MongoDB'] },
    { id: 5, title: 'Misc', skills: ['Git', 'Docker', 'CI/CD'] }
];

function Skills() {
    return (
        <div className="skills-container" id="skills">
            <h2 className="skills-heading">My Technical Skills</h2>
            {skillCategories.map(category => 
                <SkillCategory key={category.id} title={category.title} skills={category.skills} />
            )}
        </div>
    );
}

export default Skills;
