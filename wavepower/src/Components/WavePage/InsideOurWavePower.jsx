import React from "react";
import inside_img_one from '../../assets/inside_img-one.jpg'
import inside_img_two from "../../assets/wavebanner.jpg";
import inside_img_three from '../../assets/inside_img-three.jpg' 
import inside_img_four from '../../assets/inside_img-four.jpg'
import inside_img_five from "../../assets/wavePowerSystem.png";
import inside_img_six from '../../assets/inside_img-six.jpg'

const InsideOurWavePower = () => {
  return (
    <section className="inside-wave-section">
      <div className="container">
        <h2 className="inside-title">Inside Our Wave Power System</h2>
        <p className="inside-desc">
          Explore the key components and engineering behind our wave power system
          that efficiently converts ocean motion into clean, reliable electricity.
        </p>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="inside-wave-card">
              <img src={inside_img_one} alt="Wave system 1" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inside-wave-card">
              <img src={inside_img_two} alt="Wave system 2" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inside-wave-card">
              <img src={inside_img_three} alt="Wave system 3" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inside-wave-card">
              <img src={inside_img_four} alt="Wave system 4" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inside-wave-card">
              <img src={inside_img_five} alt="Wave system 5" />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="inside-wave-card">
              <img src={inside_img_six} alt="Wave system 6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsideOurWavePower;
