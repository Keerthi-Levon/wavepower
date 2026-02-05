import "./footer.css";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/Logo (1).png";
import isofooter from "../../assets/iso-footer.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-bg-section">
      <footer className="footer">
        <div className="container">
          <div className="row mb-4">
            {/* COMPANY */}
            <div className="col-md-3">
              <img src={logoIcon} alt="Company Logo" className="footer-icon" />
              <p className="footer-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non leo at justo posuere luctus. Maecenas id mauris sit.
              </p>

              <div className="iso-badges">
               <img src={isofooter} alt="ISO Badges" className="iso-footer-img" />
              </div>

              <div className="social-links">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>

            {/* OPMENTEK */}
            <div className="col-md-2">
              <h5 className="footer-links-name">Opmentek</h5>
              <ul className="resources-list">
                <li><Link to="/">Get demo</Link></li>
                <li><Link to="/">Download</Link></li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div className="col-md-2">
              <h5 className="footer-links-name">Products</h5>
              <ul className="resources-list">
                <li><Link to="/">NMIS</Link></li>
                <li><Link to="/">Open-AudIT</Link></li>
                <li><Link to="/">opEvents</Link></li>
                <li><Link to="/">opConfig</Link></li>
                <li><Link to="/">opHA</Link></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="col-md-2">
              <h5 className="footer-links-name">Resources</h5>
              <ul className="resources-list">
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Webinars</Link></li>
                <li><Link to="/">Opmentek Wiki</Link></li>
                <li><Link to="/">Prices</Link></li>
                <li><Link to="/">Contact us</Link></li>
              </ul>
            </div>

            {/* REACH US */}
            <div className="col-md-3">
              <h5 className="footer-links-name">Reach us</h5>
              <ul className="reach-us-list">
                <li>
                  <HiOutlineMail />
                  <span><strong>Support:</strong> hello@wavepower.co</span>
                </li>
                <li>
                  <HiOutlinePhone />
                  <span><strong>General:</strong> +91 9944076993</span>
                </li>
                <li>
                  <FaLocationDot />
                  <span>
                    <strong>USA Office:</strong> 772 Lyonwood Ave, Walnut, CA
                    91789
                  </span>
                </li>
                <li>
                  <FaLocationDot />
                  <span>
                    <strong>Australia Office:</strong> 772 Lyonwood Ave, Walnut,
                    CA 91789
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="footer-bottom">
            <span>LevonTechno Solution 2025. All rights reserved</span>
            <Link to="/">Terms & Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
