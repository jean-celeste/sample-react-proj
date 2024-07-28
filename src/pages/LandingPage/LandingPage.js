// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>Your journey to greatness starts here.</p>
        <a href="#features" className="cta-button">Learn More</a>
      </header>
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="feature">
          <h3>Feature 1</h3>
          <p>Details about feature 1.</p>
        </div>
        <div className="feature">
          <h3>Feature 2</h3>
          <p>Details about feature 2.</p>
        </div>
        <div className="feature">
          <h3>Feature 3</h3>
          <p>Details about feature 3.</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
