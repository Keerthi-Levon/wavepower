import  { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./header.css";
import { FaBars, } from "react-icons/fa6";
import logoIcon from "../../assets/Logo (1).png";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomeInitiallyActive, setIsHomeInitiallyActive] = useState(true);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHomeInitiallyActive(false);
    }
  }, [location]);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/" && isHomeInitiallyActive) {
      return true;
    }
    return location.pathname === path;
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <>
      <div className="container">
        <div
          className={`header container  justify-content-between align-items-center `}
        >
          <div className="navbar-head">
            <a className="navbar-brand" href="/">
              <img src={logoIcon} alt="Logo" className="logo-icon" />
            </a>
            <div>
              <ul className="header-menu">
                <li className="header-menu-item">
                  <Link
                    className={`nav-link ${isActive("/") ? "active-link" : ""}`}
                    to="/"
                    onClick={toggleNav}
                  >
                    Home
                  </Link>
                </li>

                <li className="header-menu-item">
                  <Link
                    className={`nav-link ${isActive("/services") ? "active-link" : ""
                      }`}
                    to="/services"
                    onClick={toggleNav}
                  >
                    Services
                  </Link>
                </li>
                <li className="header-menu-item">
                  <Link
                    className={`nav-link ${isActive("/about-us") ? "active-link" : ""
                      }`}
                    to="/about-us"
                    onClick={toggleNav}
                  >
                    About Us
                  </Link>
                </li>
                <li className="header-menu-item">
                  <Link
                    className={`nav-link ${isActive("/contact") ? "active-link" : ""
                      }`}
                    to="/contact"
                    onClick={toggleNav}
                  >
                    Contact Us
                  </Link>
                </li>
                   <li className="header-menu-item">
                  <Link
                    className={`nav-link ${isActive("/about-us") ? "active-link" : ""
                      }`}
                    to="/about"
                    onClick={toggleNav}
                  >
                    About 
                  </Link>
                </li>

              </ul>
            </div>
          </div>

          <div>
            <ul className="header-menu">

              <li>
                <button
                  className="get-consultant px-4"
                  onClick={() => navigate("/contact")}
                >
                  Get In Touch
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mobile-header d-flex justify-content-between align-items-center d-md-none">
        <Link to="/" className="navbar-brand">
          {/* <img src={logoIcon} alt="Logo" className="logo-icon" /> */}
        </Link>
        <button className="menu-toggle-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={isActive("/") ? "active-link" : ""}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={isActive("/services") ? "active-link" : ""}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={isActive("/about") ? "active-link" : ""}
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "active-link" : ""}
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
             <li>
            <Link
              to="/about"
              className={isActive("/about") ? "active-link" : ""}
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
             
          <li>
            <button
              className="btn btn-outline-light rounded-pill px-4"
              onClick={() => {
                navigate("/contact");
                toggleMenu();
              }}
            >
              Get In Touch
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
