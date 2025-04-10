export default function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>
            DermDetect makes skin cancer screening accessible in three simple
            steps.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-image">📱</div>
            <h3>Take a Photo</h3>
            <p>
              Use your smartphone or upload an existing image of the skin area
              you're concerned about.
            </p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-image">🔍</div>
            <h3>AI Analysis</h3>
            <p>
              Our machine learning model analyzes the image for patterns
              associated with different skin conditions.
            </p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-image">📋</div>
            <h3>Get Results</h3>
            <p>
              Receive an assessment with risk indicators and recommended next
              steps for your skin health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
