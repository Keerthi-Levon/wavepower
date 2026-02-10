import React from "react";
import wavepower from "../../assets/wavePowerSystem.png";

const HowOurWavepower = () => {
  return (
    <section className="wavepower-section">
      <div className="container">
        <div className="row align-items-center">
          
           
          <div className="col-lg-6">
            <h2 className="wavepower-title">
              How Our Wave Power <br /> Systems Works
            </h2>

            <p className="wavepower-desc">
              Our system captures ocean wave movement and transforms it into
              sustainable electrical power through safe and efficient energy
              conversion.
            </p>

            
            <div className="row g-3">
             
              <div className="col-md-6">
                <div className="wave-step active">
                  <span className="step-number">01.</span>
                  <h5>Ocean Wave Movement</h5>
                  <p>
                    Natural ocean waves create continuous and powerful motion
                    on the water’s surface.
                  </p>
                </div>
              </div>

               
              <div className="col-md-6">
                <div className="wave-step inactive">
                  <span className="step-number">02.</span>
                  <h5>Energy Capture</h5>
                  <p>
                    Our advanced wave energy converters are strategically
                    positioned to capture the power.
                  </p>
                </div>
              </div>

               
              <div className="col-md-6">
                <div className="wave-step inactive">
                  <span className="step-number ">03.</span>
                  <h5>Mechanical Energy</h5>
                  <p>
                    Captured wave motion is converted into mechanical energy
                    using specialized systems.
                  </p>
                </div>
              </div>

               
              <div className="col-md-6">
                <div className="wave-step active dark">
                  <span className="step-number">04.</span>
                  <h5>Electricity Generation</h5>
                  <p>
                    Mechanical energy is transformed into clean electrical
                    power using high-performance generators.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src={wavepower}
              alt="Wave Power System"
              className="wavepower-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowOurWavepower;
