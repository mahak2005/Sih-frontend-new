import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ activePage, toggleSidebar }) => {
  return (
    <header className="header">
      <button className="menu-icon" onClick={toggleSidebar}>
        ☰
      </button>
      <h1>AQUANIDHI</h1>
      <nav>
        <Link to="/" className={activePage === 'Admin Dashboard' ? 'active' : ''}>Admin Dashboard</Link>
        <Link to="/data-analysis" className={activePage === 'Data Analysis' ? 'active' : ''}>Data Analysis</Link>
      </nav>
    </header>
  );
};

export default Header;
