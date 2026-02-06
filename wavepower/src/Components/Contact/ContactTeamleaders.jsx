import React from "react";
import image1 from "../../assets/Teamleader-1.png";
import image2 from "../../assets/Teamleader-2.png";
import image3 from "../../assets/Teamleader-3.png";
import image4 from "../../assets/Teamleader-4.png";
import image5 from "../../assets/Teamleader-5.png";
import image6 from "../../assets/Teamleader-6.png";

const ContactTeamleaders = () => {
  const teamLeaders = [
    { img: image1, name: "Michal Kosinski", role: "General Manager" },
    { img: image2, name: "Michal Kosinski", role: "Community Manager" },
    { img: image3, name: "Michal Kosinski", role: "Community Manager" },
    { img: image4, name: "Michal Kosinski", role: "Community Manager" },
    { img: image5, name: "Michal Kosinski", role: "Community Manager" },
    { img: image6, name: "Michal Kosinski", role: "Community Manager" },
  ];

  return (
    <div className="Background-wrapper">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 text-center Teamleader-heading mb-4">
            <p>Meet Our Team Leaders</p>
          </div>

          {teamLeaders.map((leader, index) => (
            <div
              className="col-lg-4 col-md-6 mb-4 d-flex justify-content-center"
              key={index}
            >
              <div className="Teamleader-overview">
                <div className="Teamleader-image">
                  <img src={leader.img} alt={`TeamLeader-${index + 1}`} />
                </div>
                <div className="Teamleader-name text-center">
                  <h6>{leader.name}</h6>
                  <p>{leader.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactTeamleaders;
