export default function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <span className="logo-icon">⚕️</span>
            DermDetect
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="btns">
            <a href="/login" className="btn secondary">
              Login
            </a>
            <a href="/signup" className="btn">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
