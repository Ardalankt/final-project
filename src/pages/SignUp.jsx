import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a request to your backend signup endpoint here
    console.log({ name, email, password });
    alert("Signup form submitted!");
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create Your Medical Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="signup-image">
        <img
          src="https://images.unsplash.com/photo-1588776814546-ec7c5f45a122?auto=format&fit=crop&w=800&q=80"
          alt="Medical theme"
        />
      </div>
    </div>
  );
}
