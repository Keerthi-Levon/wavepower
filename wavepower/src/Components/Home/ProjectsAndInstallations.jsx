import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import project1 from "../../assets/project1_img.png";
import project2 from "../../assets/project2_img.png";

const ProjectsAndInstallations = () => {
  return (
    <section className="projects-section">
      <div className="container">
        <h3 className="section-title">Projects / Installations</h3>
        <p className="section-desc">
          Eco Wave Power has successfully delivered wave energy projects that
          demonstrate the reliability and effectiveness of our technology.
          Each installation is designed to generate clean energy while
          maintaining environmental safety and long-term performance.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
          className="projects-swiper"
        >
          
          <SwiperSlide>
            <div className="project-card">
              <div className="image-stack left">
                <div className="image-back"></div>
                <img src={project1} alt="" className="image-front" />
              </div>
              <div className="project-content">
                <h5>Coastal Wave Power Plant</h5>
                <p>
                  This coastal installation harnesses the natural movement
                  of ocean waves to generate renewable electricity.
                </p>
                <ul>
                  <li><strong>Location:</strong> India</li>
                  <li><strong>Status:</strong> Operational</li>
                  <li><strong>Purpose:</strong> Clean power generation</li>
                </ul>
                <div className="view-more-main">
                  <a href="#" className="view-more">View More →</a>
                </div>
              </div>
            </div>
          </SwiperSlide>

           
          <SwiperSlide>
            <div className="project-card">
              <div className="image-stack right">
                <div className="image-back"></div>
                <img src={project2} alt="" className="image-front" />
              </div>
              <div className="project-content">
                <h5>Pilot Green Energy Project</h5>
                <p>
                  This pilot project was developed to test and validate
                  wave energy technology in real ocean conditions.
                </p>
                <ul>
                  <li><strong>Location:</strong> Coastal region</li>
                  <li><strong>Status:</strong> Pilot / Testing Phase</li>
                  <li><strong>Purpose:</strong> Technology validation</li>
                </ul>
                <div className="view-more-main">
                  <a href="#" className="view-more">View More →</a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 3 */}
          <SwiperSlide>
            <div className="project-card">
              <div className="image-stack left">
                <div className="image-back"></div>
                <img src={project1} alt="" className="image-front" />
              </div>
              <div className="project-content">
                <h5>Coastal Wave Power Plant</h5>
                <p>
                  This coastal installation harnesses the natural movement
                  of ocean waves to generate renewable electricity.
                </p>
                <ul>
                  <li><strong>Location:</strong> India</li>
                  <li><strong>Status:</strong> Operational</li>
                  <li><strong>Purpose:</strong> Clean power generation</li>
                </ul>
                <div className="view-more-main">
                  <a href="#" className="view-more">View More →</a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* CARD 4 */}
          <SwiperSlide>
            <div className="project-card">
              <div className="image-stack right">
                <div className="image-back"></div>
                <img src={project2} alt="" className="image-front" />
              </div>
              <div className="project-content">
                <h5>Pilot Green Energy Project</h5>
                <p>
                  This pilot project was developed to test and validate
                  wave energy technology in real ocean conditions.
                </p>
                <ul>
                  <li><strong>Location:</strong> Coastal region</li>
                  <li><strong>Status:</strong> Pilot / Testing Phase</li>
                  <li><strong>Purpose:</strong> Technology validation</li>
                </ul>
                <div className="view-more-main">
                  <a href="#" className="view-more">View More →</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsAndInstallations;
