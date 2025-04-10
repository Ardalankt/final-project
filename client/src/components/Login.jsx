export default function Login() {
  return (
    <form className="auth-form">
      <h1>Welcome Back</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required />
      </div>

      <div className="form-check">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
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
