import React from "react";
import ChatInterface from "../../components/ChatInterface/ChatInterface";
import ProductRecommendation from "../../components/ProductRecommendation/ProductRecommendation";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="front-container">
          <h2>Your Guide to Smarter <br /> Investing</h2>
           <p>Get personalized financial advice and recommendations.</p> 
           <button className="button-square" onClick={() => alert('Clicked!')}>
  Get Started
</button>
           </div>
          <div class="image-container">
   <img src="./src/assets/front-pic2.png" class="resized-img" alt="Example Image"/>
</div>
          
      </section>
      <section className="features">
        <div className="container">
          <h1>Why Choose Us?</h1>
          <div className="feature-list">
            <div className="feature">
              <h4>AI-Powered Advice</h4>
              <p><i>Get tailored recommendations  <br />based on your financial goals.</i></p>
            </div>
            <div className="feature">
              <h4>Easy to Use</h4>
              <p><i>Simple and intuitive interface  <br />for all users.</i></p>
            </div>
            <div className="feature">
              <h4>Secure & Reliable</h4>
              <p><i>Your data is safe with us.</i></p>
            </div>
          </div>
        </div>
      </section>
      <section className="product-section">
        <div className="container">
          <ProductRecommendation />
        </div>
      </section>
      <section className="chat-section">
        <div className="container">
          <h1>Chat with Our AI Assistant</h1>
          <ChatInterface />
        </div>
      </section>
    </div>
  );
}