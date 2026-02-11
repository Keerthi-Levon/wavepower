import React from "react";
import image1 from "../../assets/upcoming_banner.jpg";

const UpcomingBanner = ({
  title = "Upcoming Wave Energy Projects Shaping a Sustainable Energy Future",
  description = "Discover our next-generation wave power projects designed to expand clean energy access, strengthen energy reliability, and support a sustainable future.",
  tag = "Wave Power",
  buttonText = "Get in Touch",
  image = image1,
}) => {
  return (
    <section className="upcoming-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="upcoming-content">
              <h2 className="upcoming-title">{title}</h2>

              <p className="upcoming-description">
                {description}
              </p>

              <p className="upcoming-tag">{tag}</p>

              <button className="upcoming-btn">
                {buttonText}
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6">
            <div className="upcoming-image-wrapper">
              <img src={image} alt="Upcoming Wave Project" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingBanner;
