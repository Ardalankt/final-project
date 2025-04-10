export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>
            Our application uses advanced technology to help you monitor your
            skin health with confidence.
          </p>
        </div>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📷</div>
            <h3>Instant Analysis</h3>
            <p>
              Upload photos of skin concerns and receive immediate AI-powered
              assessments that help identify potential risks.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Visual History</h3>
            <p>
              Track changes over time with an organized history of all your
              previous scans and assessment results.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Private & Secure</h3>
            <p>
              Your health data is encrypted and protected with the highest
              security standards to ensure your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
