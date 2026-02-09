import React from "react";
import image1 from "../../assets/Ecowave.png";
const Aboutuswave = () => {
  return (
    <div>
      <div className="Background-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="Leftside-image">
                <img src={image1} alt="Leftside-image" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="Rightside-Overview">
                <div className="rightside-Heading">
                  <p>Why Choose Us</p>
                </div>
                <div className="rightside-content">
                  <p>
                    Eco Wave Power combines experience, innovation, and
                    sustainability to deliver reliable wave-based renewable
                    energy solutions. Our focus on quality, safety, partner in
                    clean energy development.Our team consists of skilled
                    engineers, energy specialists, and sustainability energy
                    projects.
                  </p>
                </div>
                <div className="Aboutus-button">
                  <button>Get in Touch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutuswave;
