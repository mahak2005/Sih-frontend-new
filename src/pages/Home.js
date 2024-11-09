// home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleGetStartedClick = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">AQUANIDHI</div>
        <input type="text" className="search-bar" placeholder="Search 'catfish'" />
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      </header>

      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Tools</li>
        </ul>
      </nav>

      <section className="main-section">
        <h1>Simplifying fisheries research!</h1>
        <p>
          Empowering marine researchers with comprehensive, geo-referenced fish
          catch data to drive species-specific fisheries forecasting.
        </p>
        <button className="get-started" onClick={handleGetStartedClick}>Get Started</button>
      </section>

      <section className="how-it-works">
        <h2>How It Works?</h2>
        <p>
          We aggregate and organize fish catch information from multiple sources,
          providing scientists with the ability to visualize, filter, and download
          critical data for species and habitat studies.
        </p>
        <div className="icons-section">
          <div className="icon-card">
            <img src="/1.png" alt="Data Hub Icon" />
            <h3>DATA HUB</h3>
            <p>A central platform for all geo-referenced fish catch data.</p>
          </div>
          <div className="icon-card">
            <img src="/2.png" alt="Fisheries Insights Icon" />
            <h3>FISHERIES INSIGHTS</h3>
            <p>Visualize and analyze species-specific patterns and trends.</p>
          </div>
          <div className="icon-card">
            <img src="3.png" alt="Geo Insights Icon" />
            <h3>GEO INSIGHTS</h3>
            <p>Analyze fish data by location with interactive maps and filters.</p>
          </div>
          <div className="icon-card">
            <img src="/4.png" alt="Seamless Integration Icon" />
            <h3>SEAMLESS INTEGRATION</h3>
            <p>Connect multiple data sources into a single, organized system.</p>
          </div>
        </div>
      </section>

      <section className="discover-more">
        <h2>Discover More</h2>
        <p>
          At AquaNidhi, we provide a unified repository for geo-referenced fish catch data, featuring
          powerful filtering and dynamic visualization. Enhanced by machine learning models, we ensure
          data quality and reliability. With a user-friendly interface and robust security measures.
        </p>
        <button className="get-started" onClick={handleGetStartedClick}>Get Started</button>
      </section>

      <footer className="footer">
        <div className="footer-contact">
          <p>The Ultimate Fisheries Data Hub of India</p>
          <p>(434) 546-4536</p>
          <p>aquanidhi@gmail.com</p>
        </div>
        <div className="footer-links">
          <div>About</div>
          <div>Grocers</div>
          <div>Merchants</div>
          <div>Partners</div>
          <div>Contact</div>
        </div>
        <div className="social-links">
          <div>Facebook</div>
          <div>Twitter</div>
          <div>LinkedIn</div>
          <div>Instagram</div>
        </div>
        <div className="footer-copyright">
          <p>© 2024 AQUANIDHI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
