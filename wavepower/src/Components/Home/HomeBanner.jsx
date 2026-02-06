import { useEffect, useRef } from "react";
import "./homme.css";
import bannerVideo from "../../assets/bannervideo2.mp4";

const HomeBanner = () => {
  const videoRef = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 } // play when 50% visible
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-banner" ref={bannerRef}>
      <video
        ref={videoRef}
        className="banner-video"
        src={bannerVideo}
        muted
        loop
        playsInline
      />

      <div className="banner-overlay">
        <h1> Energy from the Ocean </h1>
        <h1>Clean for the Future</h1>
      </div>
    </section>
  );
};

export default HomeBanner;
