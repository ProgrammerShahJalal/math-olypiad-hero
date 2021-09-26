import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className="top-header">
            <h1>Make The Dimond Team</h1>
            <p>We want to make the dimond team by selecting the most talented person. </p>
            <h2>Total Prize Money Budget: <span id="budget">10</span> Million!</h2>
        </div>
    );
};

export default Header;