import "./footer.css";
import { Link } from "react-router-dom";

import logoIcon from "../../assets/Logo (1).png";

const Footer = () => {
  return (
    <div className="footer-bg-section">
      <footer className="footer mt-4">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-3 mb-4 mb-md-0">
              <img src={logoIcon} alt="Icon" className="footer-icon" />
              <div className="socials-margin">
                <h5 className="footer-heading">COMPANY</h5>
                <p className="footer-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  non leo at justo posuere luctus. Maecenos id mauris sit.
                </p>
                <div className="iso-badges mb-3">
                  <span className="badge">ISO 27001</span>
                  <span className="badge">ISO 9001</span>
                </div>
                <div className="social-links">
                  <a href="#" className="social-icon">
                    f
                  </a>
                  <a href="#" className="social-icon">
                    𝕏
                  </a>
                  <a href="#" className="social-icon">
                    in
                  </a>
                  <a href="#" className="social-icon">
                    📷
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-2 mb-4 mb-md-0">
              <h5 className="footer-links-name">Opmentek</h5>
              <ul>
                <li className="mb-2">
                  <Link to="/">Get demo</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Download</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-4 mb-md-0">
              <h5 className="footer-links-name">Products</h5>
              <ul>
                <li className="mb-2">
                  <Link to="/">NMIS</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Open-AudIT</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">opEvents</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">opConfig</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">opHA</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-4 mb-md-0">
              <h5 className="footer-links-name">Resources</h5>
              <ul>
                <li className="mb-2">
                  <Link to="/">Blog</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Webinars</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Opmentek Wiki</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Prices</Link>
                </li>
                <li className="mb-2">
                  <Link to="/">Contact us</Link>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4 mb-md-0">
              <h5 className="footer-links-name">Reach us</h5>
              <ul className="reach-us-list">
                <li className="mb-3">
                  <span className="icon">✉</span>
                  <span>
                    <strong>Support:</strong> hello@wavepower.co
                  </span>
                </li>
                <li className="mb-3">
                  <span className="icon">📱</span>
                  <span>
                    <strong>General:</strong> +91 9944076993
                  </span>
                </li>
                <li className="mb-3">
                  <span className="icon">📍</span>
                  <span>
                    <strong>USA Office:</strong> 772 Lyonwood Ave Walnut, CA
                    91789
                  </span>
                </li>
                <li>
                  <span className="icon">📍</span>
                  <span>
                    <strong>Australia Office:</strong> 772 Lyonwood Ave, Walnut,
                    CA 91789
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="footer-bottom">
            <div className="footer-left">
              LevonTechno Solution 2025. All rights reserved
            </div>
            <div className="footer-right">
              <Link to="/">Terms & Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
