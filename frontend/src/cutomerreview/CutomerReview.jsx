import React from "react";
import "./review.scss";
const CutomerReview = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        {" "}
        customer's <span>review</span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            asperiores laboriosam praesentium enim maiores? Ad repellat
            voluptates alias facere repudiandae dolor accusamus enim ut odit,
            aliquam nesciunt eaque nulla dignissimos.
          </p>
          <div className="user">
            <img
              src="https://cdn.thoibaotaichinhvietnam.vn/stores/news_dataimages/thoibaotaichinhvietnamvn/012015/26/17/top-10-sao-dien-anh-noi-tieng-hao-phong-ve-lam-tu-thien-10-.6228.jpg"
              alt
            />
            <div className="user-info">
              <h3>jackie chan</h3>
              <span>happy customer</span>
            </div>
          </div>
          <span className="fas fa-quote-right" />
        </div>
        <div className="box">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            asperiores laboriosam praesentium enim maiores? Ad repellat
            voluptates alias facere repudiandae dolor accusamus enim ut odit,
            aliquam nesciunt eaque nulla dignissimos.
          </p>
          <div className="user">
            <img
              src="https://cafebiz.cafebizcdn.vn/thumb_w/600/162123310254002176/2022/2/7/photo1644221304064-16442213041571624690993.jpg"
              alt
            />
            <div className="user-info">
              <h3>john deo</h3>
              <span>happy customer</span>
            </div>
          </div>
          <span className="fas fa-quote-right" />
        </div>
        <div className="box">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            asperiores laboriosam praesentium enim maiores? Ad repellat
            voluptates alias facere repudiandae dolor accusamus enim ut odit,
            aliquam nesciunt eaque nulla dignissimos.
          </p>
          <div className="user">
            <img
              src="https://anh.eva.vn/upload/4-2014/images/2014-12-18/1418921012-2.jpg"
              alt
            />
            <div className="user-info">
              <h3>Hoài Linh</h3>
              <span>happy customer</span>
            </div>
          </div>
          <span className="fas fa-quote-right" />
        </div>
      </div>
    </section>
  );
};

export default CutomerReview;
