export default function Header() {
  return (
    <header className="home-header">
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
          <div className="hero-buttons">
            <a href="/auth" className="btn secondary">
              Login
            </a>
            <a href="/auth" className="btn">
              Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
