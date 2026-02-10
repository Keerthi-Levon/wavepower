import waveImage from "../../assets/whoweare.png"; 
import bulleticon from "../../assets/bulleticon.png"; 
import icon from "../../assets/energyicon.png"
const WhoWeAre = () => {
    const steps = [
    {
      title: "Wave Movement",
      desc: "Ocean waves move continuously due to wind and natural water motion.",
    },
    {
      title: "Energy Conversion",
      desc: "Specially designed wave energy devices capture the up-and-down motion of waves.",
    },
    {
      title: "Power Generation",
      desc: "The mechanical energy is transformed into electrical energy through generators.",
    },
    {
      title: "Grid Supply",
      desc: "The generated electricity is sent to the local power grid and distributed to homes.",
    },
  ];
  return (
    <>
    <section className="py-5 bg-gray-300">
      <div className="container">
        <div className="row align-items-center justify-content-between g-5 ">
          
          {/* Left Content */}
          <div className="col-lg-6">
            <small className="text-primary fw-semibold text-uppercase">
              Driving Sustainable Energy With Us
            </small>

            <h2 className="fw-bold mt-2 mb-3">Who We Are</h2>

            <p className="text-secondary mb-4">
              Eco Wave Power is dedicated to generating clean and renewable
              energy from ocean waves. We aim to reduce{" "}
              <strong>innovative and eco-friendly technology</strong>.
            </p>

            {/* Mission */}
            <div className="d-flex align-items-start mb-3">
              <img src={bulleticon} width="40" height="40" alt="Bullet Icon" className="me-3" />
              <div>
                <h6 className="fw-bold mb-1">Mission:</h6>
                <p className="mb-0 text-secondary">
                  To deliver reliable wave-based renewable energy that protects
                  nature and supports global sustainability.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="d-flex align-items-start mb-4">
               <img src={bulleticon} width="40" height="40" alt="Bullet Icon" className="me-3" />
              <div>
                <h6 className="fw-bold mb-1">Vision:</h6>
                <p className="mb-0 text-secondary">
                  To become a leading provider of ocean-powered green energy for
                  a cleaner tomorrow.
                </p>
              </div>
            </div>

            <button className="btn btn-primary rounded-pill px-4 py-2">
              Get in Touch
            </button>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 position-relative">
            <div className="">
              <img
                src={waveImage}
                alt="Wave Energy"
                className="img-fluid rounded-4"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
     <section className="py-5 bg-white">
      <div className="container">
        
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">How Wave Energy Works</h2>
          <p className="text-muted mt-2">
            Wave energy uses the natural motion of ocean waves to generate clean
            electricity through advanced and eco-friendly technology.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {steps.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="wave-energy-card">
                <div className="card-body p-4 d-flex justify-content-center align-items-center flex-column">
                  
                  {/* Icon */}
                  <div className="mb-3 fs-2 d-flex justify-content-center align-items-center" style={{width: "60px", height: "60px"}}>
                    <img src={icon} alt="" />
                  </div>

                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p className="mb-0 small">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
};

export default WhoWeAre;
