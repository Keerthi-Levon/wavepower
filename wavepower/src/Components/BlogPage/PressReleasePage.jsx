import React, { useRef, useState, useEffect } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import card1 from "../../assets/pressrelease1.jpg";
import card2 from "../../assets/pressrelease2.jpg";
import card3 from "../../assets/pressrelease3.jpg";
import card4 from "../../assets/pressrelease4.png";

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
    { img: card1, title: "Wave Energy Installations", description: "Eco Wave Power reveals plans to expand its wave energy projects across key coastal regions to strengthen clean energy infrastructure.", time: "30 min" },
    { img: card2, title: "Wave Energy Project", description: "The pilot project demonstrates reliable performance, ocean-safe operation, ocean-safe and strong potential for large-scale deployment.", time: "25 min" },
    { img: card3, title: "Sustainable Energy", description: "The company reinforces its mission to deliver zero-emission energy solutions that support environmental protection and sustainability goals..", time: "40 min" },
    { img: card4, title: "Wave Energy Te", description: "New technology enhancements improve efficiency, durability, and real-time energy monitoring capabilities." },
    { img: card1, title: "Understanding Wave Energy", description: "Learn how ocean waves are converted into clean and reliable electricity using advanced renewable energy systems.", time: "35 min" },
    { img: card2, title: "Why Wave Power", description: "Explore how wave energy supports sustainability and renewable infrastructure.", time: "28 min" },
  ];

  return (
    <div className="blogcard container" style={{ position: "relative" }}>
      {/* TOP MENU */}
      <div className="blog-menu">
        <b className="blog-title">Press Release</b>
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
