import React from "react";
import img1 from "../../assets/why_choose_us.png";  
import img2 from "../../assets/choose_us_two.png";  


const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="why-content">
              <h3>Why Choose Us</h3>
              <p>
                Waveion Energy combines experience, innovation, and
                sustainability to deliver reliable wave-based renewable
                energy solutions. Our focus on quality, safety, and
                partnership drives clean energy development.
              </p>
              <p>
                Our team consists of skilled engineers, energy specialists,
                and sustainability energy projects.
              </p>
              <button className="why-btn">Get in Touch</button>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="col-lg-6">
            <img className="why-choose-image" src={img1} alt="" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
