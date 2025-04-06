import React, { useState } from "react";
import "./TaxPlanner.css";

export default function TaxPlanner() {
  const [income, setIncome] = useState(0);
  const [ageGroup, setAgeGroup] = useState("<60");
  const [deductions, setDeductions] = useState({
    hra: 0,
    lta: 0,
    section80C: 0,
    section80D: 0,
    nps: 0,
    homeLoan: 0,
    other: 0
  });

  const calculateTax = () => {
    // Convert all values to numbers and ensure they're finite
    const grossIncome = Number(income) || 0;
    const totalDeductions = Object.values(deductions).reduce(
      (sum, value) => sum + (Number(value) || 0),
      0
    );

    // Ensure taxable income doesn't go negative
    const taxableIncome = Math.max(0, grossIncome - totalDeductions);
    let tax = 0;

    // Tax slabs for FY 2023-24 (New Tax Regime)
    if (ageGroup === "<60") {
      if (taxableIncome <= 300000) tax = 0;
      else if (taxableIncome <= 600000) tax = (taxableIncome - 300000) * 0.05;
      else if (taxableIncome <= 900000) tax = 15000 + (taxableIncome - 600000) * 0.1;
      else if (taxableIncome <= 1200000) tax = 45000 + (taxableIncome - 900000) * 0.15;
      else if (taxableIncome <= 1500000) tax = 90000 + (taxableIncome - 1200000) * 0.2;
      else tax = 150000 + (taxableIncome - 1500000) * 0.3;
    } 
    else if (ageGroup === "60-80") { // Senior Citizen
      if (taxableIncome <= 300000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 300000) * 0.05;
      else if (taxableIncome <= 1000000) tax = 10000 + (taxableIncome - 500000) * 0.2;
      else tax = 110000 + (taxableIncome - 1000000) * 0.3;
    }
    else { // Super Senior Citizen (80+)
      if (taxableIncome <= 500000) tax = 0;
      else if (taxableIncome <= 1000000) tax = (taxableIncome - 500000) * 0.2;
      else tax = 100000 + (taxableIncome - 1000000) * 0.3;
    }

    // Add 4% health and education cess
    tax += tax * 0.04;

    return {
      grossIncome,
      totalDeductions,
      taxableIncome,
      tax: Math.max(0, tax),
      effectiveRate: grossIncome > 0 ? (tax / grossIncome * 100) : 0
    };
  };

  const handleDeductionChange = (field, value) => {
    const numValue = Math.max(0, Number(value) || 0);
    setDeductions(prev => ({
      ...prev,
      [field]: numValue
    }));
  };

  const { grossIncome, totalDeductions, taxableIncome, tax, effectiveRate } = calculateTax();

  // Deduction limits
  const deductionLimits = {
    section80C: 150000,
    section80D: ageGroup === "<60" ? 25000 : 50000,
    nps: 50000,
    homeLoan: 200000
  };

  return (
    <div className="tax-planner">
      <div className="planner-header">
        <h2>Tax Planner</h2>
        <p>Optimize your tax savings under Indian Income Tax laws</p>
      </div>

      <div className="planner-body">
        <div className="input-section">
          <div className="input-group">
            <label>Annual Income (₹)</label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Math.max(0, e.target.value))}
              min="0"
              step="1000"
            />
          </div>

          <div className="input-group">
            <label>Age Group</label>
            <select
              value={ageGroup}
              onChange={(e) => setAgeGroup(e.target.value)}
            >
              <option value="<60">Below 60</option>
              <option value="60-80">60-80 (Senior Citizen)</option>
              <option value=">80">Above 80 (Super Senior)</option>
            </select>
          </div>

          <h3>Deductions</h3>
          
          <div className="deduction-grid">
            {Object.entries({
              hra: "HRA Exemption",
              lta: "LTA Exemption",
              section80C: "Section 80C (PPF, ELSS, etc.)",
              section80D: "Section 80D (Health Insurance)",
              nps: "NPS (Section 80CCD)",
              homeLoan: "Home Loan Interest",
              other: "Other Deductions"
            }).map(([field, label]) => (
              <div key={field} className="deduction-item">
                <label>{label}</label>
                <input
                  type="number"
                  value={deductions[field]}
                  onChange={(e) => handleDeductionChange(field, e.target.value)}
                  min="0"
                  max={deductionLimits[field] || undefined}
                  step="1000"
                />
                {deductionLimits[field] && (
                  <small>Max: ₹{deductionLimits[field].toLocaleString()}</small>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="result-section">
          <div className="result-card">
            <h3>Tax Calculation</h3>
            <div className="result-row">
              <span>Gross Income:</span>
              <span>₹ {grossIncome.toLocaleString()}</span>
            </div>
            <div className="result-row">
              <span>Total Deductions:</span>
              <span>₹ {totalDeductions.toLocaleString()}</span>
            </div>
            <div className="result-row highlight">
              <span>Taxable Income:</span>
              <span>₹ {taxableIncome.toLocaleString()}</span>
            </div>
            <div className="result-row">
              <span>Tax Liability:</span>
              <span>₹ {tax.toFixed(0).toLocaleString()}</span>
            </div>
            <div className="result-row">
              <span>Effective Tax Rate:</span>
              <span>{effectiveRate.toFixed(2)}%</span>
            </div>
          </div>

          <div className="suggestions">
            <h3>Tax Saving Tips</h3>
            <ul>
              <li>Maximize Section 80C (₹1.5L limit) via ELSS, PPF, or life insurance</li>
              <li>Utilize NPS for additional ₹50K deduction under Section 80CCD(1B)</li>
              <li>Health insurance can save up to ₹25K-₹50K under Section 80D</li>
              <li>Home loan interest deduction up to ₹2L under Section 24</li>
              <li>Consider tax-saving FDs or SCSS for senior citizens</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}