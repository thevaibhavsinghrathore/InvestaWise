import React, { useState } from "react";
import "./EMICalculator.css";

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(8);
  const [tenure, setTenure] = useState(12);
  const [investmentType, setInvestmentType] = useState("sip");

  const calculateEMI = () => {
    const r = rate / 100 / 12;
    const n = tenure;
    if (investmentType === "loan") {
      return (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      // SIP calculation
      return principal * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    }
  };

  const emi = calculateEMI().toFixed(2);

  return (
    <div className="emi-calculator">
      <div className="calculator-header">
        <h2>Investment Calculator</h2>
        <p>Plan your SIP, mutual funds, and loan payments</p>
      </div>

      <div className="calculator-body">
        <div className="input-group">
          <label>Investment Type</label>
          <select 
            value={investmentType}
            onChange={(e) => setInvestmentType(e.target.value)}
            className="calculator-input"
          >
            <option value="sip">SIP/Mutual Fund</option>
            <option value="loan">Loan EMI</option>
          </select>
        </div>

        <div className="input-group">
          <label>
            {investmentType === "loan" ? "Loan Amount" : "Monthly Investment"} (₹)
          </label>
          <input
            type="range"
            min="1000"
            max="1000000"
            step="1000"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="calculator-slider"
          />
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="calculator-input"
          />
        </div>

        <div className="input-group">
          <label>Annual Rate (%)</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="calculator-slider"
          />
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="calculator-input"
          />
        </div>

        <div className="input-group">
          <label>Tenure (months)</label>
          <input
            type="range"
            min="6"
            max="360"
            step="6"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="calculator-slider"
          />
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            className="calculator-input"
          />
        </div>

        <div className="result-container">
          <h3>
            {investmentType === "loan" ? "Monthly EMI" : "Future Value"}
          </h3>
          <div className="result-amount">₹ {emi}</div>
          {investmentType === "sip" && (
            <p className="result-note">
              Estimated value after {tenure} months at {rate}% annual return
            </p>
          )}
        </div>
      </div>
    </div>
  );
}