import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from "react-icons/im";
import flody from "../../assets/flody_img.jpg";
import jane from "../../assets/jane_img.jpg";
import kristin from "../../assets/kristin_img.jpg";
import { Pagination, Autoplay } from "swiper/modules";

const RealStories = () => {
  return (
    <div className="real-stories-section">
      <div className="container">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoHeight={true}
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="stories-heading">
                  <ImQuotesLeft
                    style={{ color: "#0070F0", fontSize: "40px" }}
                  />

                  <h2>
                    Real Stories from <br /> Real Customers
                  </h2>

                  <p>Get inspired by these stories.</p>
                </div>

                <div className="stories-card-main">
                  <div className="story-card mt-4">
                    <h5 className="brand">ETHzürich</h5>

                    <p className="story-text">
                      Waveion Energy delivers a truly sustainable energy
                      solution. Their wave energy technology is efficient,
                      eco-friendly, and well-designed for long-term use.
                    </p>

                    <div className="story-user">
                      <img src={flody} alt="" />
                      <div>
                        <h6>Floyd Miles</h6>
                        <span>Vice President, ETHZURICH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 d-flex flex-column gap-4">
                <div className="story-card allegro-card">
                  <h5 className="brand allegro">allegro</h5>

                  <p className="story-text">
                    The Waveion Energy team demonstrated deep knowledge.
                  </p>

                  <div className="story-user">
                    <img src={jane} alt="" />
                    <div>
                      <h6>Jane Cooper</h6>
                      <span>CEO, ALLEGRO</span>
                    </div>
                  </div>
                </div>

                <div className="story-card bloomberg-card">
                  <h5 className="brand">Bloomberg</h5>

                  <p className="story-text">
                    Working with Waveion Energy has been a great experience.
                  </p>

                  <div className="story-user">
                    <img src={kristin} alt="" />
                    <div>
                      <h6>Kristin Watson</h6>
                      <span>Co-Founder, BLOOMBERG</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row">
              <div className="col-lg-6  col-md-6">
                <div className="stories-heading">
                  <ImQuotesLeft
                    style={{ color: "#0070F0", fontSize: "40px" }}
                  />

                  <h2>
                    Real Stories from <br /> Real Customers
                  </h2>

                  <p>Get inspired by these stories.</p>
                </div>

                <div className="stories-card-main">
                  <div className="story-card mt-4">
                    <h5 className="brand">TESLA</h5>

                    <p className="story-text">
                      Excellent renewable integration and support.
                    </p>

                    <div className="story-user">
                      <img src={flody} alt="" />
                      <div>
                        <h6>Elon Test</h6>
                        <span>CEO, TESLA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 d-flex flex-column gap-4">
                <div className="story-card allegro-card">
                  <h5 className="brand allegro">Google</h5>

                  <p className="story-text">
                    Their ocean tech is innovative and scalable.
                  </p>

                  <div className="story-user">
                    <img src={jane} alt="" />
                    <div>
                      <h6>Sundar Demo</h6>
                      <span>CEO, Google</span>
                    </div>
                  </div>
                </div>

                <div className="story-card bloomberg-card">
                  <h5 className="brand">Microsoft</h5>

                  <p className="story-text">Very reliable renewable partner.</p>

                  <div className="story-user">
                    <img src={kristin} alt="" />
                    <div>
                      <h6>Satya Demo</h6>
                      <span>CEO, Microsoft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RealStories;
