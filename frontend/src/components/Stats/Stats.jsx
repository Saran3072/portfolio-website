import React from 'react';
import './Stats.css';

function Stats() {
    return (
        <div className="stats-container">
            <div className="stat">
                <span className="stat-number">01+</span>
                <br />
                <span className="stat-description">Years XP</span>
            </div>
            <div className="stat">
                <span className="stat-number">10+</span>
                <br />
                <span className="stat-description">Projects</span>
            </div>
            <div className="stat">
                <span className="stat-number">01+</span>
                <br />
                <span className="stat-description">Companies</span>
            </div>
        </div>
    );
}

export default Stats;
