import React from "react";
 

const StayUpToDate = () => {
  return (
    <section className="stay-section">
      <div className="container">
        <div className="row">
          
          
          <div className="col-lg-8 faq-content">
            
            <div className="faq-block">
              <h5>What is Eco Wave Power and what problem does it solve?</h5>
              <p>
                Eco Wave Power is a renewable energy company dedicated to
                converting the <span>natural motion of ocean waves</span> into
                clean and reliable electricity.
              </p>
            </div>

            <div className="faq-block">
              <h5>How does Eco Wave Power technology work?</h5>
              <p>
                Our wave energy technology captures the kinetic energy generated
                by ocean waves and converts it into electrical power through
                advanced mechanical and electrical systems. The movement of waves
                drives specially designed energy converters, which then generate
                electricity that is <span>transmitted to the grid.</span>
              </p>
            </div>

            <div className="faq-block">
              <h5>
                How does Eco Wave Power protect marine life and the environment?
              </h5>
              <p>
                Environmental protection is at the core of our technology.
                Eco Wave Power systems are designed to operate without disrupting
                marine ecosystems. The equipment is ocean-safe, produces no
                emissions, <span>construction that could harm marine habitats.</span>
              </p>
            </div>

            <div className="faq-block">
              <h5>
                Why should investors, and communities choose Eco Wave Power?
              </h5>
              <p>
                Eco Wave Power offers a proven, scalable, and cost-effective
                renewable energy solution that meets government and industry
                standards. Our technology <span>requires low maintenance,
                delivers long-term durability, and supports sustainability goals.</span>
              </p>
            </div>

          </div>

          
          <div className="col-lg-4 subscribe-box">
            <h5>Stay up to Date</h5>

            <label>Email</label>
            <input type="email" placeholder="enter your email" />

            <button>Subscribe</button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StayUpToDate;
