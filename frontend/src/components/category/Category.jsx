import React from "react";
import "./category.scss";
import Slider from "react-slick";
import image1 from "../../Asset/cat-1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
const Category = () => {
  const products = useSelector((state) => state.commerceSlice.products);
  console.log(products);
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="category">
      <Slider {...settings} className="Slider">
        {products.map((value) => {
          return (
            <div className="box">
              <img src={value.image} alt />
              <h3>pizza</h3>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Category;
