import React, { useState } from "react";
import Cart from "../cart/Cart";
import "./header.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  isLogout,
  searchProduct,
} from "../../redux/feature/products/CommerceSlice";
import { cleanCart } from "../../redux/feature/cart/cartSlice";
const Header = () => {
  const login = useSelector((state) => state.commerceSlice.login);
  const products = useSelector((state) => state.commerceSlice.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartSlice.cart.cart);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  function toggleSearchBar() {
    if (showSearchBar) {
      setShowSearchBar(false);
    } else {
      setShowSearchBar(true);
    }
  }
  const handleSearchValue = () => {
    navigate("/");
    setShowSearchBar(false);
    dispatch(searchProduct(searchValue));
  };
  useEffect(() => {
    if (login === false) {
      dispatch(cleanCart());
    }
  }, [login]);
  function handLogout() {
    let text = "are you sure";
    /*global event*/
    /*eslint no-restricted-globals: ["error", "event"]*/
    if (confirm(text) === true) {
      dispatch(isLogout());
      //eslint-disable-line
      navigate("login");
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
  }
  return (
    <>
      <header className="header">
        <Link to="#" className="logo">
          <i className="fas fa-utensils"> food</i>
        </Link>
        <nav className="navbar">
          <Link to="/">home</Link>
          <Link to="about">about</Link>
          <Link to="popular">popular</Link>
          <Link to="review">review</Link>
        </nav>
        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <div
            id="search-btn"
            className="fas fa-search"
            onClick={toggleSearchBar}
          ></div>
          <Link to="cart">
            <div id="cart-btn" className="fas fa-shopping-cart">
              {cart?.length}
            </div>
          </Link>
          {login ? (
            <div class="fas fa-sign-in-alt" onClick={handLogout}></div>
          ) : (
            <Link to="login">
              <div id="login-btn" className="fas fa-user"></div>
            </Link>
          )}
        </div>
        <section
          className={
            showSearchBar
              ? "search-form-container active"
              : "search-form-container"
          }
        >
          <form action="">
            <input
              type="search"
              name=""
              placeholder="search..."
              id="search-box"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <label
              htmlFor="search-box"
              className="fas fa-search"
              onClick={handleSearchValue}
            ></label>
          </form>
        </section>
      </header>
    </>
  );
};

export default Header;
