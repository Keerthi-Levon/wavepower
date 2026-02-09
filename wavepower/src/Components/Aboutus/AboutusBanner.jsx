import React from "react";
import image1 from "../../assets/whoweare.png";
const AboutusBanner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="Aboutus-wrapper">
            <div className="Aboutus-Heading">
              <p>About Us</p>
            </div>
            <div className="Aboutus-content">
              <p>
                {" "}
                Harnessing ocean waves to deliver <br /> sustainable, reliable,
                and eco-friendly <br />
                power for generations to come.
              </p>

              <span className="Aboutus-para">
                Eco Wave Power is committed to generating <br />
                sustainable and eco-friendly electricity <br />
                using the natural power of ocean waves.
              </span>
            </div>
            <div className="Aboutus-button">
              <button>Get in Touch</button>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="Aboutus-imagewrapper">
            <div className="Wavepower-Image">
              <img src={image1} alt="Wavepower-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusBanner;
