import React from "react";
import { FaWater, FaChartLine, FaLeaf, FaShieldAlt, FaCogs, FaGlobe } from "react-icons/fa";

const KeyReasons = () => {
  return (
    <section className="key-reasons-section">
      <div className="container">
        <h2 className="section-title text-center">
          Key Reasons to Choose Wave Energy
        </h2>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 reason-item text-center">
            <FaWater className="reason-icon" />
            <h5>Renewable Energy Source</h5>
            <p>
              Wave energy uses the natural motion of ocean waves to generate electricity
            </p>
          </div>
          <div className="col-lg-4 col-md-6 reason-item text-center">
            <FaChartLine className="reason-icon" />
            <h5>Predictable Power Generation</h5>
            <p>
              Ocean waves are consistent and follow predictable patterns, allowing wave energy
            </p>
          </div>
          <div className="col-lg-4 col-md-6 reason-item text-center">
            <FaLeaf className="reason-icon" />
            <h5>Low Environmental Impact</h5>
            <p>
              Wave energy systems are designed to operate safely within the marine environment
            </p>
          </div>
          <div className="col-lg-4 col-md-6 reason-item text-center">
            <FaShieldAlt className="reason-icon" />
            <h5>Strong Energy Security</h5>
            <p>
              By utilizing local ocean resources, wave energy reduces dependence on imported
            </p>
          </div>
          <div className="col-lg-4 col-md-6 reason-item text-center">
            <FaCogs className="reason-icon" />
            <h5>Future-Ready Technology</h5>
            <p>
              Wave energy solutions can be deployed as small pilot projects or expanded
            </p>
          </div>
          <div className="col-lg-4 col-md-6 reason-item text-center">
            <FaGlobe className="reason-icon" />
            <h5>Global Sustainability Goals</h5>
            <p>
              Wave energy contributes directly to climate action and renewable energy targets
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyReasons;
