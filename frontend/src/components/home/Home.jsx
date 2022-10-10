import React from 'react';
import imagehome from "../../Asset/home-img.png"
import imagehome2 from "../../Asset/home-parallax-img.png"
import "./home.scss"
const Home = () => {
    return (
       <section className="home" id="home">
  <div className="content">
    <span>welcome foodies</span>
    <h3>different spices for the different tastes 😋</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde dolores temporibus hic quam debitis tenetur harum nemo.</p>
    <a href="#" className="btn">order now</a>
  </div>
  <div className="image">
    <img src={imagehome} alt className="home-img" />
    <img src={imagehome2} alt className="home-parallax-img" />
  </div>
</section>
    );
};

export default Home;