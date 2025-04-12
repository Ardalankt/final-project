import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/auth.css";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  const switchToLogin = () => setActiveTab("login");
  const switchToSignup = () => setActiveTab("signup");

  return (
    <>
      <div className="main-content">
        <div className="auth-container">
          {/* Image Panel */}
          <div className="auth-image">
            <h2>Early Detection Saves Lives</h2>
            <p>
              Join thousands of users who monitor their skin health with our
              advanced AI technology.
            </p>
            <img
              src="src/assets/images/dermotoligist.jpg"
              alt="Skin analysis visualization"
            />

            <div className="testimonial">
              <p>
                "DermDetect helped me identify a suspicious mole that turned out
                to be an early melanoma."
              </p>
              <div className="author">— Sarah T., DermDetect User</div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="auth-form">
            <div className="auth-tabs">
              <div
                className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
                onClick={switchToLogin}
              >
                Login
              </div>
              <div
                className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
                onClick={switchToSignup}
              >
                Sign Up
              </div>
            </div>

            {activeTab === "login" ? <Login /> : <SignUp />}
          </div>
        </div>
      </div>
    </>
  );
}
