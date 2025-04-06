import React from "react";
import "./Learn.css";
import {
  FaChartLine,
  FaShieldAlt,
  FaBalanceScale,
  FaMoneyBillWave,
  FaGlobe,
  FaCalculator
} from "react-icons/fa";

// Import article images (store these in your assets folder)
import indexFundsImg from "../../assets/images/index-funds.jpeg";
import technicalImg from "../../assets/images/technical-analysis.jpg";
import riskMgmtImg from "../../assets/images/risk-management.jpeg";
import sectorImg from "../../assets/images/sector-rotation.jpeg";
import optionsImg from "../../assets/images/options-trading.jpg";
import behaviorImg from "../../assets/images/behavioral-finance.jpg";

const articles = [
  {
    id: 1,
    title: "Mastering Index Funds",
    image: indexFundsImg,
    icon: <FaChartLine />,
    description: "Learn how passive investing can outperform active strategies over the long term with lower costs.",
    readTime: "8 min read",
    category: "Investing"
  },
  {
    id: 2,
    title: "Technical Analysis Decoded",
    image: technicalImg,
    icon: <FaBalanceScale />,
    description: "Read charts like a pro with these essential technical indicators and patterns.",
    readTime: "10 min read",
    category: "Trading"
  },
  {
    id: 3,
    title: "Risk Management Essentials",
    image: riskMgmtImg,
    icon: <FaShieldAlt />,
    description: "Protect your capital with professional risk management techniques used by hedge funds.",
    readTime: "7 min read",
    category: "Strategy"
  },
  {
    id: 4,
    title: "Sector Rotation Strategies",
    image: sectorImg,
    icon: <FaGlobe />,
    description: "Capitalize on economic cycles by rotating between winning sectors at the right time.",
    readTime: "9 min read",
    category: "Markets"
  },
  {
    id: 5,
    title: "Options Trading Guide",
    image: optionsImg,
    icon: <FaCalculator />,
    description: "Advanced options strategies for income generation and portfolio protection.",
    readTime: "12 min read",
    category: "Derivatives"
  },
  {
    id: 6,
    title: "Behavioral Finance Insights",
    image: behaviorImg,
    icon: <FaMoneyBillWave />,
    description: "Understand the psychological traps that sabotage investment performance.",
    readTime: "6 min read",
    category: "Psychology"
  }
];

export default function Learn() {
  return (
    <div className="learn-container">
      <section className="learn-hero">
        <div className="hero-content">
          <h1>Financial Education Hub</h1>
          <p>Expert-curated articles to elevate your investment knowledge</p>
        </div>
      </section>

      <div className="articles-grid">
        {articles.map(article => (
          <article key={article.id} className="article-card">
            <div className="article-image-container">
              <img 
                src={article.image} 
                alt={article.title}
                className="article-image"
                loading="lazy"
              />
              <div className="article-category">
                {article.category}
              </div>
            </div>
            
            <div className="article-content">
              <div className="article-header">
                <div className="article-icon">
                  {article.icon}
                </div>
                <h3>{article.title}</h3>
              </div>
              
              <p className="article-description">
                {article.description}
              </p>
              
              <div className="article-footer">
                <span className="read-time">{article.readTime}</span>
                <button className="read-button">
                  Read Article
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}