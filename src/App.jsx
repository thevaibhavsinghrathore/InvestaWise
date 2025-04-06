import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Modules from "./components/Modules/Modules";
import EMICalculator from "./components/Modules/EMICalculator/EMICalculator";
import ExpenseTracker from "./components/Modules/ExpenseTracker/ExpenseTracker";
import TaxPlanner from "./components/Modules/TaxPlanner/TaxPlanner";
import Learn from "./components/Learn/Learn";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import "./styles/globalStyles.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/emi-calculator" element={<EMICalculator />} />
        <Route path="/modules/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/modules/tax-planner" element={<TaxPlanner />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}
