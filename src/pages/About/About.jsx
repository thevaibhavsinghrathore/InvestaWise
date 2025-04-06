import React from "react";
import "./About.css";
import { FaShieldAlt, FaChartLine, FaLightbulb, FaHandshake } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Smarter Financial Future Starts Here</h1>
          <p className="hero-subtitle">
            GenAI Financial Assistant democratizes investing knowledge through 
            artificial intelligence, making professional-grade advice accessible 
            to everyone.
          </p>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <FaShieldAlt className="mission-icon" />
              <h3>Security First</h3>
              <p>
                We prioritize the safety of your financial data with bank-level 
                encryption and never share your information.
              </p>
            </div>
            <div className="mission-card">
              <FaChartLine className="mission-icon" />
              <h3>Data-Driven Advice</h3>
              <p>
                Our AI analyzes millions of data points to provide personalized 
                recommendations tailored to your goals.
              </p>
            </div>
            <div className="mission-card">
              <FaLightbulb className="mission-icon" />
              <h3>Financial Literacy</h3>
              <p>
                We explain complex concepts in simple terms to help you make 
                informed decisions with confidence.
              </p>
            </div>
            <div className="mission-card">
              <FaHandshake className="mission-icon" />
              <h3>No Conflicts</h3>
              <p>
                Unlike traditional advisors, we don't earn commissions - our 
                only incentive is your financial success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>The Technology Behind Our Assistant</h2>
          <div className="tech-stack">
            <div className="tech-item">
              <div className="tech-icon ai-icon">AI</div>
              <h3>Generative AI</h3>
              <p>
                Advanced natural language processing that understands and 
                explains financial concepts conversationally.
              </p>
            </div>
            <div className="tech-item">
              <div className="tech-icon ml-icon">ML</div>
              <h3>Machine Learning</h3>
              <p>
                Algorithms that continuously improve recommendations based on 
                market data and user feedback.
              </p>
            </div>
            <div className="tech-item">
              <div className="tech-icon blockchain-icon">🔗</div>
              <h3>Secure Infrastructure</h3>
              <p>
                Enterprise-grade security protocols to protect your data and 
                privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Take Control of Your Financial Future?</h2>
          <button className="cta-button">Start Your Journey Today</button>
        </div>
      </section>
    </div>
  );
}