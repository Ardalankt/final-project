export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>Early Detection Saves Lives</h1>
            <p>
              Upload a photo of your skin concern and get an instant analysis
              powered by advanced machine learning. DermDetect helps identify
              potential skin cancer signs early when treatment is most
              effective.
            </p>
            <div className="hero-buttons">
              <a href="/scan" className="btn">
                Start Skin Check
              </a>
              <a href="#how-it-works" className="btn secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="" alt="Skin analysis visualization" />
          </div>
        </div>
      </div>
    </section>
  );
}
