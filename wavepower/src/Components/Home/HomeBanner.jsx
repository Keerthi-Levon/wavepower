import { useEffect, useRef, useState } from "react";
import "./homme.css";
import bannerVideo from "../../assets/bannervideo2.mp4";
import mobileBannerVideo from "../../assets/bannervideo.mp4";

const HomeBanner = () => {
  const videoRef = useRef(null);
  const bannerRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState(bannerVideo);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVideoSrc(mobileBannerVideo);
      } else {
        setVideoSrc(bannerVideo);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Play / Pause on scroll visibility
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
      { threshold: 0.5 }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-banner" ref={bannerRef}>
      <video
        key={videoSrc}   // important: forces reload when source changes
        ref={videoRef}
        className="banner-video"
        src={videoSrc}
        muted
        loop
        playsInline
        autoPlay
      />

      <div className="banner-overlay">
        <h1>Energy from the Ocean</h1>
        <h1>Clean for the Future</h1>
      </div>
    </section>
  );
};

export default HomeBanner;
