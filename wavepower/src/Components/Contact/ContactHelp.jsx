import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ContactTeamleaders from "./ContactTeamleaders";
const ContactLeaders = () => {
  const helpData = [
    "See the impact you can make by adopting clean and reliable wave energy solutions.",
    "Learn how our wave power technology can be customized suit your and energy..",
    "Get expert guidance and ongoing support from our renewable energy and marine..",
  ];
  return (
    <div className="Background-wrapper">
    <div className="container">
      <div className="Contact-help">
        <div className="Help-content">
          <p>Need Help Making a Decision?</p>
        </div>
        <div className="Demo-Button">
          <button>Book a Demo</button>
        </div>
        <div className="row mt-5">
          {helpData.map((text, index) => (
            <div className="col-lg-4" key={index}>
              <div className="Help-label">
                <div className="help-icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <div className="help-content">
                  <p>{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <ContactTeamleaders/>
    </div>
  );
};
export default ContactLeaders;
