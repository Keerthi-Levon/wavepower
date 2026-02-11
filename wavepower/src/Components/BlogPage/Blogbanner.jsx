import React from "react";
import blogbanner from "../../assets/Blogbannerimg.jpg";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
const Blogbanner = () => {
  return (
    <div className="blogbanner container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="blogbanner-img-outer">
            <div className="blogbanner-img">
              <img src={blogbanner} alt="Blog Banner" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="blogbanner-content">
            <h2>Blog</h2>
            <p>
                <b>Insights on Wave Energy & Sustainable Power.</b>
               <br />Stay updated with the
              latest articles, innovations, and insights on wave energy,
              renewable technology, and sustainable solutions shaping the future
              of clean power.
            </p>
            <p>
              Our blog shares knowledge, industry updates, and expert
              perspectives on ocean wave energy and green technology. From
              emerging innovations to real-world projects and sustainability
              trends. <br />
              <a href=""> Read more</a>
            </p>
            
            <div className="blogbanner-icons">
              <div className="icon-circle">
                <FaFacebookF />
              </div>
              <div className="icon-circle">
                <FaTwitter />
              </div>
              <div className="icon-circle">
                <FaLinkedinIn />
              </div>
              <div className="icon-circle">
                <PiInstagramLogoFill />
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="blogbanner-extracontent">
            <p>Discover articles that highlight the power of ocean waves, advancements in renewable energy, and the journey toward a cleaner and more sustainable future. This blog covers trends, technologies, and insights from the renewable energy sector, with a focus on wave power solutions that support environmental and economic sustainability.</p>
            <p>Wave energy is one of the most promising renewable energy sources, offering consistent power generation with minimal environmental impact. Through innovation and smart engineering, demands.</p>
            <p>At Waveion Energy, we explore how ocean energy technology is evolving and how it can be safely integrated into coastal environments. Our articles focus on real-world applications, project experiences, and advancements that improve efficiency and sustainability. This blog is a space for sharing insights, research updates, and industry trends related to clean energy. Whether you are an energy professional, investor, or sustainability enthusiast, our content helps you understand the role of wave power in building a greener future. Our articles focus on real-world applications, project experiences, and advancements that improve efficiency and sustainability.</p>
        </div>
    </div>
  );
};

export default Blogbanner;
