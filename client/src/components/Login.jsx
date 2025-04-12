import React, { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm({ ...form, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5050/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        return alert(data.message || "Login failed.");
      }

      alert("Login successful!");
      console.log("JWT:", data.token);
      // Optional: save token or redirect
    } catch (err) {
      console.error(err);
      alert("Server error. Please try again.");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1>Welcome Back</h1>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          id="rememberMe"
          checked={form.rememberMe}
          onChange={handleChange}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <div className="forgot-password">
        <a href="/forgot-password">Forgot password?</a>
      </div>

      <button type="submit" className="btn">
        Log In
      </button>
    </form>
  );
}
