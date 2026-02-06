import { useRef } from "react";
// import "./homme.css";
import banner from "../../../src/assets/wavebanner.jpg";

const WaveBanner = () => {
  const bannerRef = useRef(null);

  return (
    <section
      className="wavepower-banner"
      ref={bannerRef}
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="wavepower-banner-overlay">
        <h1>Wave Power Systems</h1>
        {/* <h1>Ocean Waves</h1> */}
        <p>Advanced systems designed to convert ocean wave motion into clean, reliable, and sustainable electricity with minimal environmental impact. Eco-friendly wave power systems that harness the natural energy of ocean waves to support a greener and low-carbon future.</p>
        <button className="wavebanner-btn">Get in touch</button>
      </div>
    </section>
  );
};

export default WaveBanner;
