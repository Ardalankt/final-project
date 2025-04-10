export default function SignUp() {
  return (
    <form className="auth-form">
      <h1>Create Your Account</h1>
      <div className="form-group">
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" type="text" required />
      </div>

      <div className="form-group">
        <label htmlFor="signup-email">Email</label>
        <input id="signup-email" type="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="signup-password">Password</label>
        <input id="signup-password" type="password" required />
      </div>

      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input id="confirm-password" type="password" required />
      </div>

      <div className="form-check">
        <input type="checkbox" id="terms" required />
        <label htmlFor="terms">
          I agree to the <a href="/terms">Terms of Service</a> and{" "}
          <a href="/privacy">Privacy Policy</a>
        </label>
      </div>

      <button type="submit" className="btn">
        Create Account
      </button>
    </form>
  );
}
