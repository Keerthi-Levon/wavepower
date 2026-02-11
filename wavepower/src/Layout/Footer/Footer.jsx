import "./footer.css";
import { Link } from "react-router-dom";
import logoIcon from "../../assets/logobg.png";
// import isofooter from "../../assets/iso-footer.png";
// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaXTwitter,
// } from "react-icons/fa6";
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
               WaveIon Energy is dedicated to generating clean and renewable energy from ocean waves. We aim to reduce innovative and eco-friendly technology.
              </p>

              {/* <div className="iso-badges">
               <img src={isofooter} alt="ISO Badges" className="iso-footer-img" />
              </div>

              <div className="social-links">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div> */}
            </div>

            {/* OPMENTEK */}
            {/* <div className="col-md-2">
              <h5 className="footer-links-name">Opmentek</h5>
              <ul className="resources-list">
                <li><Link to="/">Get demo</Link></li>
                <li><Link to="/">Download</Link></li>
              </ul>
            </div> */}

            {/* PRODUCTS */}
            <div className="col-md-3">
              <h5 className="footer-links-name">Quick Links</h5>
              <ul className="resources-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/wave-power">Wave Power</Link></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="col-md-3">
              <h5 className="footer-links-name">Useful Links</h5>
              <ul className="resources-list">
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Terms and conditons</Link></li>
                <li><Link to="/">Cookies policy</Link></li>
                
              </ul>
            </div>

            {/* REACH US */}
            <div className="col-md-3">
              <h5 className="footer-links-name">Reach us</h5>
              <ul className="reach-us-list">
                <li>
                  <HiOutlineMail />
                  <span><strong></strong>contact@waveionenergy.com</span>
                </li>
                <li>
                  <HiOutlinePhone />
                  <span> +91 9108018277</span>
                </li>
                <li>
                  <FaLocationDot />
                  <span>
                     #8, 3rd floor, 24th Main Road, J P Nagar 5th Phase, Bengaluru, Karnataka 560078
                  </span>
                </li>
                {/* <li>
                  <FaLocationDot />
                  <span>
                    <strong>Australia Office:</strong> 772 Lyonwood Ave, Walnut,
                    CA 91789
                  </span>
                </li> */}
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
