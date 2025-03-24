export default function HowItWorks() {
  return (
    <section class="how-it-works" id="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2>How It Works</h2>
          <p>
            DermDetect makes skin cancer screening accessible in three simple
            steps.
          </p>
        </div>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-image">📱</div>
            <h3>Take a Photo</h3>
            <p>
              Use your smartphone or upload an existing image of the skin area
              you're concerned about.
            </p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-image">🔍</div>
            <h3>AI Analysis</h3>
            <p>
              Our machine learning model analyzes the image for patterns
              associated with different skin conditions.
            </p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-image">📋</div>
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
