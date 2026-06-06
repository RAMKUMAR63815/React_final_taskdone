import React from "react";

export default function About() {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="about-overlay">

        <section className="about-hero">
          <span className="badge">✈️ Explore The World With TravelGo</span>

          <h1>
            About <span>TravelGo</span>
          </h1>

          <p>
            Your trusted global travel partner helping millions explore the world
            with ease, comfort, and affordability.
          </p>

          <button className="hero-btn">Start Your Journey</button>
        </section>

        <section className="about-grid">

          <div className="about-card">
            <h2>🎯 Our Mission</h2>
            <p>
              To make travel simple, affordable, and accessible for everyone.
            </p>
          </div>

          <div className="about-card">
            <h2>🌍 Our Vision</h2>
            <p>
              To become the world’s most trusted travel platform.
            </p>
          </div>

          <div className="about-card">
            <h2>💼 Experience</h2>
            <p>
              10+ years in airline, hotel, and tourism partnerships.
            </p>
          </div>

        </section>

        <section className="stats-section">

          <div className="stat-box">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-box">
            <h3>5M+</h3>
            <p>Happy Travelers</p>
          </div>

          <div className="stat-box">
            <h3>120+</h3>
            <p>Countries</p>
          </div>

          <div className="stat-box">
            <h3>24/7</h3>
            <p>Support</p>
          </div>

        </section>

        <section className="cta-section">

          <h2>Ready to travel the world?</h2>

          <p>Book your next journey with TravelGo.</p>

          <button>Explore Packages</button>

        </section>

      </div>
    </div>
  );
}