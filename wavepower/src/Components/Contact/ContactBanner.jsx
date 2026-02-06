import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const ContactBanner = () => {

  const contactData = [
    {
      icon: <IoCallOutline className="call-icon" />,
      title: "Talk to",
      highlight: "Us",
      value: "+91 9944076993",
    },
    {
      icon: <MdOutlineMail className="call-icon" />,
      title: "Mail",
      highlight: "Us",
      value: "Contact@wave.com",
    },
    {
      icon: <IoLocationOutline className="call-icon" />,
      title: "Our",
      highlight: "Location",
      value: "#10, HSR, Bengaluru, Karnataka.",
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <div className="Contact-Baneer">
        <div className="Contact-Bannerimage">
          <div className="Banner-Content">
            <h1>
              Get in Touch With Our <br /> Wave Energy Experts
            </h1>
            <p>
              We’re here to answer your questions, your journey toward a
              sustainable future.
            </p>
            <div className="contact-button">
              <button>Get in Touch</button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container">
        <div className="Getin-Content">
          <h5>Get in Touch With Us</h5>
          <p>
            Have questions or need more information about our wave energy
            solutions? Our team is ready to support you and guide you every step
            of the way.
          </p>
        </div>

        <div className="row mt-5">
          {contactData.map((item, index) => (
            <div className="col-lg-4" key={index}>
              <div className="Contact-label">
                <div className="call-label">
                  {item.icon}
                  <h5>
                    {item.title}{" "}
                    <span style={{ color: "#48bdf6" }}>
                      {item.highlight}
                    </span>
                  </h5>
                  <p>{item.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
