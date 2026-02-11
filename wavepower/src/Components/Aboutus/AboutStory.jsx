import React from "react";
import image1 from "../../assets/storyimage.jpg";
const AboutStory = () => {
  return (
    <div className="Story-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="rightside-Heading">
              <p>Our Story</p>
            </div>
            <div className="story-content">
              <p>
                Waveion Energy was founded with a clear vision to
                <br /> transform the natural power of ocean waves into
                <br /> clean and sustainable energy. Inspired by the
                <br /> endless movement of the sea.
                <br /> Inspired by the endless movement of the sea, we <br />{" "}
                set out to create an energy solution that works in
                <br /> harmony with nature.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="Story-image">
              <img src={image1} alt="story-image" />
            </div>
          </div>
        </div>
        <div className="aboutus-para">
          <p>
            Our journey began with research and innovation focused on developing
            wave energy technology that is efficient, reliable, and safe for
            marine life. Through continuous testing and pilot projects, we
            refined our systems to perform effectively in real coastal
            environments. Today, Waveion Energy delivers renewable energy
            solutions that reduce carbon emissions and support a greener future.
          </p>
          <p>
            Waveion Energy delivers renewable energy solutions that reduce
            carbon emissions and support a greener future. We continue to
            innovate, scale our technology, and work towards a world powered by
            clean ocean energy.
          </p>
          <p>
            {" "}
            Waveion Energy was founded with a clear vision to transform the
            natural power of ocean waves into clean and sustainable energy.
            Inspired by the endless movement of the sea, we set out to create an
            energy solution that works in harmony with nature. Our journey began
            with research and innovation focused on developing wave energy
            technology that is efficient, reliable, and safe for marine life.
            Through continuous testing and pilot projects, we refined our
            systems to perform effectively in real coastal environments. Today,
            Waveion Energy delivers renewable energy solutions that reduce
            carbon emissions and support a greener future.
          </p>{" "}
          <p>
            {" "}
            We delivers renewable energy solutions that reduce carbon emissions
            and support a greener future. We continue to innovate, scale our
            technology, and work towards a world powered by clean ocean energy.
          </p>
          <p>
            {" "}
            We continue to innovate, scale our technology, and work towards a
            world powered by clean ocean energy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
