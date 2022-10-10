import React, { useState } from "react";
import { useEffect } from "react";
import "./popular.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/feature/products/CommerceSlice";
import { handleAddtocart } from "./apiHandlePopular";
import { fetchCart } from "../../redux/feature/cart/cartSlice";
const Popular = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.commerceSlice.products);
  const searchValue = useSelector((state) => state.commerceSlice.searchValue);
  console.log(searchValue);
  const userID = useSelector((state) => state.commerceSlice.user._id);
  const cart = useSelector((state) => state.cartSlice.cart.cart);
  const reUpdateToCart = () => {
    dispatch(fetchCart(userID));
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const AddtoCart = (payload) => {
    const checkID = cart.find((value) => value.name == payload.name);
    if (checkID === undefined) {
      handleAddtocart(payload, userID).then(() => reUpdateToCart());
    } else {
      alert("product is in cart");
    }
  };
  return (
    <section className="popular" id="popular">
      <div className="heading">
        <span>popular food</span>
        <h3>our special dishes</h3>
      </div>
      <div className="box-container">
        {products
          .filter((value) => {
            if (searchValue === "") {
              return value;
            } else {
              return value.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            }
          })
          .map((product) => {
            return (
              <div className="box">
                <a href="#" className="fas fa-heart" />
                <div className="image">
                  <img src={product.image} alt />
                </div>
                <div className="content">
                  <h3>{product.name}</h3>
                  <div className="stars">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span> (50) </span>
                  </div>
                  <div className="price">
                    ${product.price} <span>$50</span>
                  </div>
                  <div className="btn" onClick={() => AddtoCart(product)}>
                    add to cart
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Popular;
