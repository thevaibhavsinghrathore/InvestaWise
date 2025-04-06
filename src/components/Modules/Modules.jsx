import React from "react";
import "./Modules.css";
import { FaCalculator, FaMoneyBillWave, FaFileInvoiceDollar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Modules() {
  const tools = [
    {
      id: 1,
      title: "Investment Calculator",
      icon: <FaCalculator size={48} />,
      description: "Calculate SIP returns, mutual fund growth, and loan EMIs with precision",
      path: "/modules/emi-calculator",
      color: "#3a7bd5"
    },
    {
      id: 2,
      title: "Expense Tracker",
      icon: <FaMoneyBillWave size={48} />,
      description: "Monitor personal/business expenses with insightful analytics",
      path: "/modules/expense-tracker",
      color: "#00d2ff"
    },
    {
      id: 3,
      title: "Tax Planner",
      icon: <FaFileInvoiceDollar size={48} />,
      description: "Optimize your tax savings with smart deductions calculator",
      path: "/modules/tax-planner",
      color: "#00b09b"
    }
  ];

  return (
    <div className="modules-container">
      <section className="modules-hero">
        <h1>Financial Tools</h1>
        <p>Powerful calculators to optimize your financial decisions</p>
      </section>

      <div className="tools-grid">
        {tools.map(tool => (
          <div 
            key={tool.id} 
            className="tool-card"
            style={{ borderTop: `5px solid ${tool.color}` }}
          >
            <div className="tool-icon" style={{ color: tool.color }}>
              {tool.icon}
            </div>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
            <Link to={tool.path} className="tool-button" style={{ backgroundColor: tool.color }}>
              Open Tool
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}