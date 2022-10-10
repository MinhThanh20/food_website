import React, { useState } from "react";
import "./cart.scss";
import { useEffect } from "react";
import { fetchCart } from "../../redux/feature/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateCart, deleteCart } from "./apiHandleCart";
import { Link } from "react-router-dom";
const Cart = (props) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.commerceSlice.login);
  const cart = useSelector((state) => state.cartSlice.cart.cart);
  const userID = useSelector((state) => state.commerceSlice.user._id);
  const [qty, setQty] = useState(1);
  const [totalprice, setTotalPice] = useState(0);
  useEffect(() => {
    if (login) {
      dispatch(fetchCart(userID));
    } else if (login === false) {
      restartCommponent();
    }
  }, [login]);
  const handleUpdateCart = (id_cart) => {
    if (qty > 0) {
      updateCart({
        id_cart: id_cart,
        qty: qty,
      })
        .then(() => dispatch(fetchCart(userID)))
        .then(() => subTotalHandle());
    } else {
      alert("Số lượng không thể là 0 hoặc số âm");
    }
  };
  const handleDeleteCart = (id) => {
    deleteCart(id).then(() => dispatch(fetchCart(userID)));
  };
  const subTotalHandle = () => {
    const initalvalue = 0;
    const price = cart.reduce((total, item) => total + item.price, initalvalue);
    const qty = cart.reduce((total, item) => total + item.qty, initalvalue);
    const total = price * qty;
    setTotalPice(total);
  };
  const restartCommponent = () => {
    setTotalPice(0);
  };
  return (
    <section className="shopping-cart-container active">
      <div className="products-container">
        <h3 className="title">your products</h3>
        <div className="box-container">
          {cart?.map((value) => {
            return (
              <div className="box">
                <i
                  className="fas fa-times"
                  onClick={() => handleDeleteCart(value._id)}
                ></i>
                <img src={value.image} alt="a1" />
                <div className="content">
                  {" "}
                  <h3>{value.name}</h3>
                  <span>quanity:</span>
                  <input
                    type="number"
                    defaultValue={value.qty}
                    id=""
                    onChange={(e) => setQty(e.target.value * 1)}
                    onBlur={() => handleUpdateCart(value._id)}
                  />
                  <span>price:</span>
                  <span className="price">${value.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="cart-total">
        <h3 className="title">cart total</h3>
        <div className="box">
          <h3 className="subtotal">
            subtotal: <span>${totalprice}</span>
          </h3>
          <h3 className="subtotal">
            total :<span>${totalprice}</span>
          </h3>
          <Link to="/payup" className="btn">
            proceed to checkout
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Cart;
