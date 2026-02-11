import React, { useRef, useState, useEffect } from "react";
import { Carousel, Button } from "antd";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import newspage1 from "../../assets/latestnewspage1.jpg";
import newspage2 from "../../assets/latestnewspage2.jpg";

const LatestNewsPage = () => {
  const carouselRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // RESPONSIVE CONTROL
  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSlidesToShow(1); // 📱 mobile
    } else {
      setSlidesToShow(2); // 🖥 desktop
    }
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const newsItems = [
    {
      img: newspage1,
      title: "Waveion Energy Launches New Coastal Energy Project",
      desc: "Waveion Energy announces the launch of a new coastal wave energy installation.....",
    },
    {
      img: newspage2,
      title: "Advancing Renewable Energy Through Wave Technology",
      desc: "Our latest wave energy innovation marks a major step forward in delivering efficient....",
    },
    {
      img: newspage1,
      title: "Wave Energy Expansion Program",
      desc: "A new expansion program focuses on scalable clean wave energy solutions....",
    },
    {
      img: newspage2,
      title: "Sustainable Ocean Power",
      desc: "Wave-based power solutions continue to gain momentum worldwide....",
    },
  ];

  return (
    <div className="news container">
      {/* HEADER */}
      <div className="news-head">
        <h3>Latest News</h3>
        <a href="#">See all news</a>
      </div>

      {/* CAROUSEL */}
      <Carousel
        ref={carouselRef}
        slidesToShow={slidesToShow} // ✅ responsive
        slidesToScroll={1}          // ✅ move ONE card per click
        dots={false}
        infinite={false}
      >
        {newsItems.map((item, index) => (
          <div key={index} className="news-slide">
            <div className="news-card1">
              <div className="newspage1">
                <img src={item.img} alt="" />
              </div>
              <div className="news-content">
                <b>{item.title}</b>
                <p>{item.desc}</p>
                <a href="#">Read More....</a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* ARROWS – BOTTOM RIGHT */}
      <div className="news-arrows">
        <Button
          shape="circle"
          icon={<IoIosArrowRoundBack />}
          onClick={() => carouselRef.current?.prev()}
        />
        <Button
          shape="circle"
          icon={<IoIosArrowRoundForward />}
          onClick={() => carouselRef.current?.next()}
        />
      </div>
    </div>
  );
};

export default LatestNewsPage;
