import React from "react";
import waveImage from "../../assets/eco-wavepower.png";

const WaveEnergyBanner = () => {
  return (
    <div className="wave-banner-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 wave-content">
            <h2>
              Why Wave Energy Is <br />
              the Future of Clean <br />
              Energy
            </h2>

            <p>
              Wave energy harnesses the natural and continuous motion
              of ocean waves to produce clean electricity
              <strong> zero emissions.</strong>
            </p>

            <div className="wave-features">
  <label className="radio-item">
    <input type="radio" name="waveFeature" value="reliable" defaultChecked />
    <span>Reliable</span>
  </label>

  <label className="radio-item">
    <input type="radio" name="waveFeature" value="eco" />
    <span>Eco-Friendly</span>
  </label>
</div>

            <div className="Aboutus-button">
              <button className="wave-btn">Get in Touch</button>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div className="wave-image-wrapper">
              <img src={waveImage} alt="Wave Energy" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WaveEnergyBanner;
