import React from "react";
import image from "../../Asset/serv-1.png";
import image2 from "../../Asset/about-img.png";
import "./about.scss";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="image">
        <img src={image2} alt />
      </div>
      <div className="content">
        <span>why choose us?</span>
        <h3 className="title">what's make our food delicious!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut
          explicabo, numquam iusto est a ipsum assumenda tempore esse corporis?
        </p>
        <div className="icons-container">
          <div className="icons">
            <img src={image} alt />
            <h3>fast delivery</h3>
          </div>
          <div className="icons">
            <img src={image} alt />
            <h3>fresh food</h3>
          </div>
          <div className="icons">
            <img src={image} alt />
            <h3>best quality</h3>
          </div>
          <div className="icons">
            <img src={image} alt />
            <h3>24/7 support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
