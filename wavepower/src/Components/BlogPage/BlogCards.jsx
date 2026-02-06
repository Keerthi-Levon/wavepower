import React, { useRef, useState, useEffect } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import card1 from "../../assets/blogcard1.jpg";
import card2 from "../../assets/blogcard2.jpg";
import card3 from "../../assets/blogcard3.png";
import card4 from "../../assets/blogcard4.jpg";

const BlogCards = () => {
  const carouselRef = useRef(null);

  // ✅ STATE IS REQUIRED
  const [slidesToShow, setSlidesToShow] = useState(3);

  // ✅ RESPONSIVE LOGIC
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // MOBILE → 1 CARD
      } else {
        setSlidesToShow(3.3); // DESKTOP → 3 CARDS
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blogItems = [
    { img: card1, title: "Understanding Wave Energy", description: "Learn how ocean waves are converted into clean and reliable electricity using advanced renewable energy clean ocean systems.", time: "30 min" },
    { img: card2, title: "Why Wave Power", description: "Explore how wave energy supports sustainability, reduces carbon emissions, and strengthens renewable infrastructure.", time: "25 min" },
    { img: card3, title: "Eco Wave Power", description: "Discover the eco-friendly design principles that ensure wave energy systems work safely with ocean ecosystems.", time: "40 min" },
    { img: card4, title: "Wave Energy", description: "Understand how wave power helps lower greenhouse gas emissions and supports clean energy goals.", time: "20 min" },
    { img: card1, title: "Understanding Wave Energy", description: "Learn how ocean waves are converted into clean and reliable electricity using advanced renewable energy systems.", time: "35 min" },
    { img: card2, title: "Why Wave Power", description: "Explore how wave energy supports sustainability and renewable infrastructure.", time: "28 min" },
  ];

  return (
    <div className="blogcard container" style={{ position: "relative" }}>
      {/* TOP MENU */}
      <div className="blog-menu">
        <b className="blog-title">Blogs</b>

        <div className="blog-tabs">
          <h6 className="active">Blogs</h6>
          <h6>Webinars</h6>
          <h6>Enterprise</h6>
          <h6>Podcasts</h6>
          <h6>White papers</h6>
          <h6>Case studies</h6>
        </div>
      </div>

      {/* LEFT ARROW */}
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        className="blog-arrow left"
        onClick={() => carouselRef.current?.prev()}
      />

      {/* RIGHT ARROW */}
      <Button
        shape="circle"
        icon={<RightOutlined />}
        className="blog-arrow right"
        onClick={() => carouselRef.current?.next()}
      />

      {/* CAROUSEL */}
      <Carousel
        ref={carouselRef}
        slidesToShow={slidesToShow}
        slidesToScroll={1}   // ✅ ALWAYS SLIDE 1 CARD
        dots={false}
        infinite={false}
      >
        {blogItems.map((item, index) => (
          <div key={index} className="blog-slide">
            <div className="blog-card1">
              <div className="card1-img">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="blog-card-content">
                <h5>{item.title}</h5>
                <p>{item.description}</p>

                <div className="card-footer">
                  <a href="#" className="read-more">Read more →</a>
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogCards;
