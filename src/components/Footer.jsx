export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">DermDetect</div>
            <p>
              Empowering individuals with accessible skin cancer detection
              technology through artificial intelligence.
            </p>
            <p>© 2025 DermDetect. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Medical Disclaimer</a>
              </li>
              <li>
                <a href="#">Data Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          DermDetect does not provide medical advice. Always consult healthcare
          professionals.
        </div>
      </div>
    </footer>
  );
}
