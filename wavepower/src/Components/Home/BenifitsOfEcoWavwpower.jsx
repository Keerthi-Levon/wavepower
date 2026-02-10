import React from "react";
import renewable_icon from "../../assets/renewable_icon.png";
import reduceCarbon_icon from "../../assets/reduceCardbon_icon.png";
import costing_icon from "../../assets/costing_icon.png";
import reliable_icon from "../../assets/reliable_icon.png";
import supports_icon from "../../assets/supports_icon.png";

const BenifitsOfEcoWavwpower = () => {
  return (
    <div className="beneift-main">
      <div className="container benfit-section mt-2">
        <h1>Benefits of Eco Wave Power</h1>
        <p>
          Eco Wave Power delivers clean, reliable, and cost-effective energy
          using natural ocean waves. Our technology supports sustainability
          while reducing environmental impact and long-term energy costs.
        </p>

         
        <div className="row gx-5 gy-5 mt-2">
          <div className="col-lg-7">
            <div className="benifits-card">
              <img className="card_icon" src={renewable_icon} alt="" />
              <h3>Renewable & Sustainable</h3>
              <p>
                Eco Wave Power uses the natural and continuous movement of ocean
                waves to generate electricity. Unlike fossil fuels, wave energy
                is renewable and will never run out, making it a long-term and
                sustainable energy solution.
              </p>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="benifits-card">
              <img className="card_icon" src={reduceCarbon_icon} alt="" />
              <h3>Reduces Carbon Footprint</h3>
              <p>
                Our wave energy technology produces electricity without burning
                fuel or releasing harmful gases. This to fight climate change.
              </p>
            </div>
          </div>
        </div>

        
        <div className="row gx-5 gy-5 mt-2">
          <div className="col-lg-4">
            <div className="benifits-card">
              <img className="card_icon" src={costing_icon} alt="" />
              <h3>Cost-Effective Energy</h3>
              <p>
                Once installed, Eco Wave Power systems operate with low running
                and maintenance costs.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="benifits-card">
              <img className="card_icon" src={reliable_icon} alt="" />
              <h3>Reliable Power Source</h3>
              <p>
                Ocean waves are available day and night, providing a consistent
                and source of energy.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="benifits-card">
              <img className="card_icon" src={supports_icon} alt="" />
              <h3>Supports a Clean Future</h3>
              <p>
                By investing in clean and green energy, Eco Wave Power helps
                build a future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenifitsOfEcoWavwpower;
