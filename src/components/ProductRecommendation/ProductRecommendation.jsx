import React from "react";
import "./ProductRecommendation.css";

export default function ProductRecommendation() {
  const products = [
    {
      id: 1,
      name: "Index Funds",
      description: "Low-cost, diversified investment tracking market indexes.",
      icon: "📊",
      category: "Equities",
      risk: "Medium",
      minInvestment: "₹5,000"
    },
    {
      id: 2,
      name: "Mutual Funds",
      description: "Professionally managed diversified portfolios.",
      icon: "📈",
      category: "Hybrid",
      risk: "Medium",
      minInvestment: "₹500"
    },
    {
      id: 3,
      name: "SIPs",
      description: "Systematic investment plans for disciplined investing.",
      icon: "🗓️",
      category: "Equities",
      risk: "High",
      minInvestment: "₹500/month"
    },
  ];

  return (
    <section className="product-recommendation">
      <div className="product-container">
        <h2 className="section-title">Smart Investment Options</h2>
        <p className="section-subtitle">Curated products matching your financial goals</p>
        
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-icon">{product.icon}</div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                  <span className="meta-item"><strong>Category:</strong> {product.category}</span>
                  <span className="meta-item"><strong>Risk:</strong> <span className={`risk-${product.risk.toLowerCase()}`}>{product.risk}</span></span>
                  <span className="meta-item"><strong>Min. Invest:</strong> {product.minInvestment}</span>
                </div>
              </div>
              <button className="invest-button">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}