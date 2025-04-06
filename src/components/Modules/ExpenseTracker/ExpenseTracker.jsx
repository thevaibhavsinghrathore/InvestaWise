import React, { useState } from "react";
import "./ExpenseTracker.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("food");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const categories = [
    { name: "Food", value: "food", color: "#FF6384" },
    { name: "Transport", value: "transport", color: "#36A2EB" },
    { name: "Housing", value: "housing", color: "#FFCE56" },
    { name: "Entertainment", value: "entertainment", color: "#4BC0C0" },
    { name: "Utilities", value: "utilities", color: "#9966FF" },
    { name: "Other", value: "other", color: "#FF9F40" }
  ];

  const addExpense = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) return;
    
    const newExpense = {
      id: Date.now(),
      amount: parseFloat(amount),
      category,
      date
    };
    
    setExpenses([...expenses, newExpense]);
    setAmount("");
  };

  const chartData = categories.map(cat => ({
    name: cat.name,
    value: expenses
      .filter(exp => exp.category === cat.value)
      .reduce((sum, exp) => sum + exp.amount, 0),
    color: cat.color
  })).filter(item => item.value > 0);

  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="expense-tracker">
      <div className="tracker-header">
        <h2>Expense Tracker</h2>
        <p>Monitor your personal or business spending patterns</p>
      </div>

      <div className="tracker-body">
        <div className="expense-form-container">
          <form onSubmit={addExpense} className="expense-form">
            <div className="form-group">
              <label>Amount (₹)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="add-button">
              Add Expense
            </button>
          </form>
        </div>

        <div className="expense-summary">
          <div className="summary-card total-card">
            <h3>Total Expenses</h3>
            <div className="amount">₹ {totalExpenses.toFixed(2)}</div>
          </div>

          {chartData.length > 0 && (
            <div className="chart-container">
              <h3>Spending Breakdown</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}