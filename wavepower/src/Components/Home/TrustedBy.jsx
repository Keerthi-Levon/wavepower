import React from "react";
import bloomberg from "../../assets/Bloomberg.png";
import stanford from "../../assets/stanford.png";
import cambridge from "../../assets/cambridge.png";
import microsoft from "../../assets/microsoft.png";
import ethzurich from "../../assets/eth-zurich.png";
import stitch from "../../assets/stitch-fix-seeklogo.png";
import google from "../../assets/google.png";
import opengov from "../../assets/opengov-logo.png";
import allegro from "../../assets/Allegro.png";
import amazon from "../../assets/amazon.png";
import circleup from "../../assets/circleup.png";
import isral from "../../assets/IsraelDefense.png";

const TrustedBy = () => {
  const rowOne = [isral, bloomberg, stanford, cambridge, microsoft];
  const rowTwo = [google, opengov, allegro, amazon, circleup];

  return (
    <div className="sponsor-section mt-2">
      <div className="  container">
        <h3>Trusted By over 150,000 Companies including</h3>

        {/* Row 1 */}
        <div className="scroll-wrapper">
          <div className="scroll-track">
            {[...rowOne, ...rowOne].map((logo, index) => (
              <img key={index} className="logo" src={logo} alt="brand" />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="scroll-wrapper">
          <div className="scroll-track ">
            {[...rowTwo, ...rowTwo].map((logo, index) => (
              <img key={index} className="logo" src={logo} alt="brand" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
