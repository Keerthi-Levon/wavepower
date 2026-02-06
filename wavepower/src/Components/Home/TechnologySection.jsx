import image from "../../assets/ourtechnologyimage.png";
import bulleticon from "../../assets/bulleticon.png";
const TechnologySection = () => {
  return (
    <section className="technology-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 p-4">
            <div className="tech-image-wrapper">
              <img
                src={image}
                alt="Wave Energy Technology"
                className="img-fluid tech-image"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6 p-4">
            <h3 className="tech-title mb-3">Our Technology / Solution</h3>

            <p className="tech-desc">
              Eco Wave Power uses advanced wave energy technology designed to
              produce clean electricity while protecting the ocean ecosystem.
              Our solution combines smart engineering with eco-friendly design
              to deliver reliable and sustainable energy.
            </p>

            <p className="tech-desc">
              Our systems operate with zero emissions and minimal environmental
              impact, making them safe for marine life. Built for long-term
              performance, our technology ensures high efficiency with low
              maintenance. Smart monitoring enables real-time energy tracking
              and optimized power output.
            </p>
          </div>

          <div className="row mt-4">
            {/* Feature 1 */}
            <div className="col-md-6 mb-3">
              <div className="tech-feature">
                <img src={bulleticon} alt="Bullet Icon" />
                <div>
                  <h6>Eco-Friendly Technology</h6>
                  <p>
                    Our system generates power using natural wave motion without
                    burning fuel or harmful gases.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-6 mb-3">
              <div className="tech-feature">
                <img src={bulleticon} alt="Bullet Icon" />

                <div>
                  <h6>Safety for Marine Life</h6>
                  <p>
                    The technology is designed to work in harmony with the ocean
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-6 mb-3">
              <div className="tech-feature">
                <img src={bulleticon} alt="Bullet Icon" />

                <div>
                  <h6>Low Maintenance & High Efficiency</h6>
                  <p>
                    Built with durable materials that withstand harsh ocean
                    conditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-6 mb-3">
              <div className="tech-feature">
                <img src={bulleticon} alt="Bullet Icon" />

                <div>
                  <h6>Long-Term Durability</h6>
                  <p>
                    Engineered for coastal environments, our technology offers
                    long operational performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
